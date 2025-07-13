'use client';
import { translationsMap, useI18nContext } from '@/components/i18n/i18n-provider';
import { useEffect, useRef, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';

type LanguageToggleProps = {
  openAtRight?: boolean;
};

export function LanguageToggle({ openAtRight = false }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, saveNewI18n } = useI18nContext();
  const toggleRef = useRef<HTMLDivElement>(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (translation: string) => {
    if (cooldownRef.current) return; // still in cooldown, ignore calls
    saveNewI18n(translation);
    setIsOpen(false);
    cooldownRef.current = true;
    setTimeout(() => {
      cooldownRef.current = false;
    }, 1000); // 1-second cooldown
  };

  return (
    <div ref={toggleRef} className="relative inline-block text-left w-14 item-shadow rounded ">
      <div
        className="border rounded cursor-pointer bg-white dark:bg-black px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-1">
          <IoLanguage className="inline" />
          <span>{i18n.languageInitials.toUpperCase()}</span>
        </div>
      </div>

      <div
        className={`absolute z-50 min-w-max rounded border shadow-md bg-white dark:bg-black
                  transform transition-all duration-200 ease-in-out
                  ${
                    openAtRight
                      ? 'origin-bottom-left bottom-0 left-full translate-x-0 translate-y-0'
                      : 'origin-top left-1/2 -translate-x-1/2 top-full mt-1'
                  }
                  ${
                    isOpen
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-0 pointer-events-none'
                  }
                `}
      >
        {Object.values(translationsMap).map((translation) => {
          const isSelected = translation.languageInitials === i18n.languageInitials;

          return (
            <div
              key={translation.languageInitials}
              className={`
                                px-3 py-2 whitespace-nowrap
                                transition-all duration-300 ease-in-out
                                ${
                                  isSelected
                                    ? 'bg-black dark:bg-white dark:text-black underline text-white cursor-default'
                                    : 'cursor-pointer hover:rounded hover:bg-gray-200 dark:hover:bg-gray-700'
                                }
                                `}
              onClick={() => {
                if (!isSelected) handleSelect(translation.languageInitials);
              }}
            >
              {translation.languageInitials} - {translation.languageName}
            </div>
          );
        })}
      </div>
    </div>
  );
}
