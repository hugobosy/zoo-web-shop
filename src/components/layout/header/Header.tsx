import styles from './Header.module.scss';
import Image from 'next/image';
import nameLogo from '@/assets/image/logo-name.png';
import dogLogo from '@/assets/image/logo-dog.png';
import { useTranslation } from 'next-i18next';
import { Button } from '@/components/base/button/Button';
import { PROJECT_URL } from '@/const/project-url';
import { Input } from '@/components/form/input/Input';
import { Bar } from '@/components/layout/header/bar/Bar';
import { Menu } from '@/components/layout/header/menu/Menu';

export const Header = () => {
  const { t } = useTranslation('header');
  return (
    <div className={styles.wrapper}>
      <Bar />
      <div className={styles.header}>
        <div className={styles['header-logo']}>
          <Image src={nameLogo} alt="Lakrama" width={200} height={100} />
          <Image src={dogLogo} alt="Lakrama" width={200} height={100} />
        </div>
        <div className={styles.search}>
          <Input placeholder={t('search-product')} icon="Search" />
        </div>
        <div className={styles.buttons}>
          <div>
            <Button
              variant="link"
              text={t('my-account')}
              href={PROJECT_URL.myAccount}
              icon="User"
              textColor="gray"
              textSize="m"
            />
          </div>
          <div>
            <Button
              variant="link"
              text={t('basket')}
              href={'#'}
              icon="Basket"
              textColor="gray"
              textSize="m"
            />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};
