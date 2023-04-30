import { Link, useTranslations } from 'next-intl';

function Navigation() {
  const t = useTranslations('home');
  return (
    <nav>
      <Link href="/realizacoes">{t('footer.realizacoes')}</Link>
      <Link href="/sobre">{t('footer.sobre')}</Link>
      <Link href="/servicos">{t('footer.servicos')}</Link>
    </nav>
  );
}
export default Navigation;
