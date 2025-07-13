import { useEffect, useRef, useState } from 'react';
import styles from './navbar.module.css';
import { noTextTranslationGlitchEffect, useI18nContext } from '@/components/i18n/i18n-provider';
import { Translations } from '@/components/i18n/locales/translations';
import { LanguageToggle } from '@/components/header/language/language-toggle';
import { ThemeToggle } from '@/components/header/theme/theme-toggle';

export const navbarSections = ['profile', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const { i18n } = useI18nContext();
  const [activeSection, setActiveSection] = useState('profile');
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>(
    new Array(navbarSections.length).fill(null),
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  // Helper to assign ref safely
  const setLinkRef = (index: number) => (el: HTMLAnchorElement | null) => {
    linksRef.current[index] = el;
  };

  // Setup IntersectionObserver for scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );

    navbarSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      navbarSections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Animate indicator position and width
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeIndex = navbarSections.indexOf(activeSection);
    const activeLink = linksRef.current[activeIndex];

    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const quarterWidth = linkRect.width / 4;
      const centerLeft = linkRect.left - navRect.left + linkRect.width / 2;

      indicatorRef.current.style.width = `${quarterWidth}px`;
      indicatorRef.current.style.left = `${centerLeft - quarterWidth / 2}px`;
    }
  }, [activeSection]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`relative flex rounded-xl p-3 pe-3 items-center space-x-4 me-1 rounded-bl-2xl
        shadow-md z-50 overflow-hidden
        transform origin-bottom-left transition-all duration-300 ease-in-out ${styles.navbar}`}
      >
        {navbarSections.map((section, i) => (
          <a
            key={section}
            href={`#${section}`}
            ref={setLinkRef(i)}
            className={`w-full text-left px-4 rounded text-black dark:text-white ${
              activeSection === section ? styles.navLinkActive : ''
            } ${styles.navLink}`}
          >
            {
              i18n[
                `navbar${section.charAt(0).toUpperCase() + section.slice(1)}` as keyof Translations
              ]
            }
          </a>
        ))}

        <div ref={indicatorRef} className={styles.indicator} />

        <div className={`${styles.progressBarContainer} rounded-lg`}>
          <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>
      <div id={noTextTranslationGlitchEffect} className="fixed top-0 right-0 pt-3 p-2 z-50">
        <div
          className={`flex rounded-xl p-2 pe-3 items-center space-x-4 border rounded-bl-2xl
               shadow-md z-50 ${styles.navbar}`}
        >
          <LanguageToggle />
          <span className="inline mb-1">|</span>
          <ThemeToggle iconSize={20} />
        </div>
      </div>
    </>
  );
}
