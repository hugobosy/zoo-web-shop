import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '@/assets/image/logo-name.png';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import { MenuFooter } from '@/components/layout/footer/menu/MenuFooter';
import { NewsletterFooter } from '@/components/layout/footer/newsletter/NewsletterFooter';
import { PaymentShippingFooter } from '@/components/layout/footer/payment-shipping/PaymentShippingFooter';
import { AboutUsFooter } from '@/components/layout/footer/aboutUs/AboutUsFooter';
export const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <MenuFooter />
        <NewsletterFooter />
        <AboutUsFooter />
        <PaymentShippingFooter />
      </div>
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
