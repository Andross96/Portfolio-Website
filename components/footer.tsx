import Link from 'next/link';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { useI18nContext } from '@/components/i18n/i18n-provider';

export default function Footer() {
  const { i18n } = useI18nContext();

  return (
    <footer className="text-gray-700 dark:text-gray-300 py-1 text-center text-sm px-4">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; 2025 SUSTAC André. {i18n.footerCopyright}</p>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-4">
        {/* Recaptcha */}
        <p>
          {i18n.footerRecaptcha.split('{privacyPolicy}')[0]}
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener"
            className="link"
          >
            <span className="inline-flex items-center">
              {i18n.footerRecaptchaPrivacyPolicy} <LuExternalLink size={10} />
            </span>
          </Link>
          {i18n.footerRecaptcha.split('{privacyPolicy}')[1].split('{termsOfService}')[0]}
          <Link
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener"
            className="link"
          >
            <span className="inline-flex items-center">
              {i18n.footerRecaptchaTermsOfService} <LuExternalLink size={10} />
            </span>
          </Link>
          {i18n.footerRecaptcha.split('{termsOfService}')[1]}
        </p>

        {/* Open source */}
        <p>
          {i18n.footerOpenSource}
          <Link
            href="https://github.com/Andross96/Portfolio-Website"
            target="_blank"
            rel="noopener"
            className="link"
          >
            <span className="inline-flex items-center">
              GitHub <LuExternalLink size={10} />
            </span>
          </Link>{' '}
          <span className="text-red-600">❤️</span>
        </p>
      </div>
    </footer>
  );
}
