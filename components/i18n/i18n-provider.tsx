'use client';
import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

import { Translations } from '@/components/i18n/locales/translations';
import { LocaleFr } from '@/components/i18n/locales/locale-fr';
import { LocaleEn } from '@/components/i18n/locales/locale-en';

export const translationsMap: Record<string, Translations> = {
  en: new LocaleEn(),
  fr: new LocaleFr(),
};

export function getDefaultLang(): string {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const userLang = navigator.language.split('-')[0]; // e.g., "fr" from "fr-FR"
  return userLang in translationsMap ? (userLang as keyof typeof translationsMap) : 'en';
}

export function getTranslations(lang: string): Translations {
  return translationsMap[lang?.toLowerCase()] ?? translationsMap[getDefaultLang()];
}

type I18nContextType = {
  i18n: Translations;
  saveNewI18n: (lang: string) => void;
};

function scrambleText(text: string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return text
    .split('')
    .map((char: string) =>
      char === ' ' ? ' ' : letters.charAt(Math.floor(Math.random() * letters.length)),
    )
    .join('');
}

export const noTextTranslationGlitchEffect = 'no-text-translation-glitch-effect';

function applyGlitchEffect(duration = 50, scrambleInterval = 5, cascadeDuration = 500) {
  const excludedElement = document.getElementById(noTextTranslationGlitchEffect);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node: Node) => {
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      const parentTag = (node.parentNode as Element)?.tagName;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) return NodeFilter.FILTER_REJECT;
      if (excludedElement && node.parentElement?.closest(`#${noTextTranslationGlitchEffect}`))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  const originals: string[] = [];
  const nodeYPositions: number[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      const y = rect.top + window.scrollY;
      nodes.push(node);
      originals.push(node.nodeValue || '');
      nodeYPositions.push(y);
    }
  }

  const minY = Math.min(...nodeYPositions);
  const maxY = Math.max(...nodeYPositions);
  const rangeY = maxY - minY || 1;

  let lastScramble = 0;
  let startTime: number | null = null;
  let nodeEndTimes: number[] = [];

  function glitchFrame(timestamp: number) {
    if (startTime === null) {
      startTime = timestamp;

      // Calculate end times **relative to actual start**
      nodeEndTimes = nodeYPositions.map((y) => {
        const ratio = (y - minY) / rangeY;
        return startTime! + duration + ratio * cascadeDuration;
      });
    }

    if (timestamp - lastScramble >= scrambleInterval) {
      nodes.forEach((node, i) => {
        if (timestamp < nodeEndTimes[i]) {
          node.nodeValue = scrambleText(originals[i]);
        } else {
          node.nodeValue = originals[i];
        }
      });
      lastScramble = timestamp;
    }

    if (timestamp < Math.max(...nodeEndTimes)) {
      requestAnimationFrame(glitchFrame);
    }
  }

  requestAnimationFrame(glitchFrame);
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [i18n, setI18n] = useState<Translations | null>(null);
  const initialLoadDone = useRef(false);
  // Flag to track if the change was user-initiated
  const hasUserChangedLang = useRef(false);

  useEffect(() => {
    const lang = localStorage.getItem('lang') || getDefaultLang();
    const resolvedI18n = getTranslations(lang);
    setI18n(resolvedI18n);
    localStorage.setItem('lang', resolvedI18n.languageInitials.toLowerCase());
    initialLoadDone.current = true;
  }, []);

  // Apply glitch only on user-initiated language change
  useEffect(() => {
    if (!i18n || !initialLoadDone.current) return;

    localStorage.setItem('lang', i18n.languageInitials.toLowerCase());

    if (hasUserChangedLang.current) {
      applyGlitchEffect(500);
      hasUserChangedLang.current = false; // Reset after applying
    }
  }, [i18n]);

  const saveNewI18n = (newLang: string) => {
    const newI18n = getTranslations(newLang);
    hasUserChangedLang.current = true;
    setI18n(newI18n);
  };

  if (!i18n) return null;

  return <I18nContext.Provider value={{ i18n, saveNewI18n }}>{children}</I18nContext.Provider>;
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLang must be used inside I18nProvider');
  }
  return context;
}
