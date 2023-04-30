'use client';
import { Link, useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { locales } from '../../../i18n';

function LocaleSwitcher() {
  const locale = useLocale();
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      {locales
        .filter((loc) => loc !== locale)
        .map((loc) => {
          return (
            <Link key={loc} href={redirectedPathName(loc)} title={locale === 'pt-br' ? 'English' : 'Portuguese'}>
              {locale === 'pt-br' && <Image alt="usaflag" src="/usaflag.png" width={22} height={18} />}
              {locale === 'en' && <Image alt="brazilflag" src="/brazilflag.png" width={22} height={18} />}
            </Link>
          );
        })}
    </div>
  );
}
export default LocaleSwitcher;
