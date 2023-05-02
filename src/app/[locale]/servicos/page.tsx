import { IconCard, Track } from '@/components';
import styles from './page.module.scss';
import Image from 'next/image';
import { MdManageAccounts, MdOutlineDesignServices } from 'react-icons/md';
function Servicos() {
  return (
    <main className={styles.main}>
      <Image
        src="/images/servicos/main.jpg"
        alt="main"
        width={2348}
        height={1029}
        style={{ objectFit: 'contain', width: 'auto', height: 460 }}
      />
      <Track title="Nossos Serviços" text="Conheça alguns dos nossos principais serviços" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 200px' }}>
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
        <div style={{ flex: '1 1 200px' }}>
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
