import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useI18nContext } from '@/components/i18n/i18n-provider';

const RECAPTCHA_SITE_KEY = '6LcNAXErAAAAAFFWNcq6gMSFH2NGjvjSbohEGleP';

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useI18nContext();

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
      language={i18n?.languageInitials?.toLowerCase() ?? 'en'}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
