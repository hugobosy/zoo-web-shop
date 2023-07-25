import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/image/logo-name.png';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
export const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={styles.wrapper}>
      <h1>FOOTER</h1>
      <div className={styles.copyright}>
        <Image src={logo} alt="LaKarma" width={60} height={50} />
        <Typography
          as="span"
          text={t('copyright')}
          font="ptSans"
          capitalization="2xs"
        />
      </div>
    </div>
  );
};
