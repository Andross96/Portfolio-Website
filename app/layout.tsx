import type { Metadata } from 'next';
import './globals.css';
import { Loader } from '@/components/loader';

export const metadata: Metadata = {
  title: 'Andross - Software Engineer',
  description:
    "Welcome to Andross's personal website. Software Engineer specialized in blockchain, Java and web applications.",
  keywords:
    'Andross, software engineer, developer, fullstack, blockchain, crypto, backend, Java, Spigot, Minecraft, plugins, coding, portfolio, API development',
  metadataBase: new URL('https://andross.fr/'),
  authors: [
    {
      name: 'SUSTAC André',
      url: 'https://andross.fr/',
    },
  ],
  creator: 'SUSTAC André',
  publisher: 'SUSTAC André',
  robots: 'index, follow',
  applicationName: 'Andross - Software Engineer',
  alternates: {
    canonical: 'https://andross.fr/',
  },
  openGraph: {
    title: 'Andross - Software Engineer',
    description:
      "Welcome to Andross's personal website. Software Engineer specialized in blockchain, Java and web applications.",
    url: 'https://andross.fr/',
    siteName: 'Andross - Software Engineer',
    images: [
      {
        url: '/images/self.png',
        width: 800,
        height: 414,
        alt: 'Andross - Software Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andross - Software Engineer',
    description:
      "Welcome to Andross's personal website. Software Engineer specialized in blockchain, Java and web applications.",
    images: ['/images/self.png'],
    creator: '@SustacAndre',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
