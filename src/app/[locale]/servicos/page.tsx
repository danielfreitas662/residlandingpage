import { IconCard, Track } from '@/components';
import styles from './page.module.scss';
import Image from 'next/image';
import { MdManageAccounts, MdOutlineDesignServices } from 'react-icons/md';
import { getTranslations } from 'next-intl/server';
async function Servicos() {
  const t = await getTranslations('servicos');
  return (
    <main className={styles.main}>
      <Image
        src="/images/servicos/main.jpg"
        alt="main"
        width={2348}
        height={1029}
        style={{ objectFit: 'cover', width: '100%', height: 460 }}
      />
      <Track title="Nossos Serviços" text="Conheça alguns dos nossos principais serviços" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 10px', justifyContent: 'space-between' }}>
        <div style={{ flex: '1' }}>
          <IconCard
            title="Projetos"
            text={
              <ul>
                <li>Elétrico</li>
                <li>Hidráulico</li>
                <li>Sanitário</li>
                <li>Estrutural</li>
                <li>Drenagem</li>
                <li>Lógica</li>
              </ul>
            }
            icon={<MdOutlineDesignServices />}
          />
        </div>
        <div style={{ flex: '1' }}>
          <IconCard
            title="Administração de Obras"
            text={
              <ul>
                <li>Casas em Condomínio</li>
                <li>Reformas de Casas</li>
                <li>Reformas de Apartamentos</li>
                <li>Comércio</li>
                <li>Lojas</li>
              </ul>
            }
            icon={<MdManageAccounts />}
          />
        </div>
      </div>
    </main>
  );
}
export default Servicos;
