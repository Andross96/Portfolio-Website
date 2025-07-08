'use client';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/header/theme/theme-toggle';
import { LanguageToggle } from '@/components/header/language/language-toggle';
import { noTextTranslationGlitchEffect, useI18nContext } from '@/components/i18n/i18n-provider';
import { navbarSections } from '@/components/header/navbar/navbar';
import { Translations } from '@/components/i18n/locales/translations';
import styles from './navbar.module.css';

export function MobileNavbar() {
  const { i18n } = useI18nContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`md:hidden rounded-xl pb-1 p-3
            ${styles.navbar}
           shadow-md z-50 relative`}
    >
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="relative bottom-1 w-6 h-6 flex flex-col justify-center items-center"
      >
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`bg-black dark:bg-white block transition-all duration-300 ease-out
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
        ></span>
      </button>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`absolute bottom-full left-0 mt-1 min-w-max
                content
                shadow-lg rounded-md mb-2 flex flex-col items-start p-4 space-y-3
                  transform origin-bottom-left transition-all duration-300 ease-in-out
                  ${
                    isOpen
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-0 pointer-events-none'
                  }`}
      >
        {navbarSections.map((id) => (
          <a
            key={id}
            onClick={() => setIsOpen(false)}
            href={`#${id}`}
            className="w-full text-left px-4 py-2 rounded hover:underline text-black dark:text-white"
          >
            {i18n[`navbar${id.charAt(0).toUpperCase() + id.slice(1)}` as keyof Translations]}
          </a>
        ))}

        <div id={noTextTranslationGlitchEffect} className="flex gap-4 w-full justify-center">
          <ThemeToggle onToggleAction={() => setIsOpen(false)} />
          <LanguageToggle openAtRight={true} />
        </div>
      </div>
    </div>
  );
}
