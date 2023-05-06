import { Footer, Header } from '@/components';
import './globals.css';
import { Cabin_Condensed } from 'next/font/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import Contact from '@/components/contact/contact';
import { getTranslations } from 'next-intl/server';
import Script from 'next/script';

const inter = Cabin_Condensed({ subsets: ['latin'], weight: '400' });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = await getTranslations('contato');
  return (
    <html lang={locale}>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9M03VCZ5P8" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9M03VCZ5P8', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div>{children}</div>
          <Contact content={t} />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
