import styles from './Header.module.scss';
import Image from 'next/image';
import nameLogo from '@/assets/image/logo-name.png';
import dogLogo from '@/assets/image/logo-dog.png';
export const Header = () => {
  return (
    <>
      <div className={styles.bar}></div>
      <div className={styles.header}>
        <div className={styles['header-logo']}>
          <Image src={nameLogo} alt="Lakrama" width={200} height={100} />
          <Image src={dogLogo} alt="Lakrama" width={200} height={100} />
        </div>
        <div>
          <h1>szukajka</h1>
        </div>
        <div>
          <h1>logowanie</h1>
        </div>
      </div>
      <div className={styles.menu}></div>
    </>
  );
};
