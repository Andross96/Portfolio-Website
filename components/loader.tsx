'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/components/i18n/i18n-provider';
import { BiLoaderAlt } from 'react-icons/bi';
import { RecaptchaProvider } from '@/components/recaptcha-provider';

export function Loader({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!mounted) {
      setTimeout(() => {
        setFadeOut(true);
      }, 300);
    }
  }, [mounted]);

  return (
    <>
      {!fadeOut && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-[9999]
                    bg-white dark:bg-black transition-opacity duration-500
                    ${mounted ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="flex flex-col items-center gap-4">
            <BiLoaderAlt className="animate-spin text-blue-600 dark:text-blue-400" size={54} />
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <I18nProvider>
            <RecaptchaProvider>{children}</RecaptchaProvider>
          </I18nProvider>
        </ThemeProvider>
      </div>
    </>
  );
}
