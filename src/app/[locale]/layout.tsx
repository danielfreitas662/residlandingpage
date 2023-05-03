import { Footer, Header } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import Contact from '@/components/contact/contact';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Resid',
  description: 'Casa com o seu jeito',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = await getTranslations('contato');
  return (
    <html lang="en">
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
