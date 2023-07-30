import styles from './PaymentShippingFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import dpd from '@/assets/image/dpd.png';
import dhl from '@/assets/image/dhl.png';
import inpost from '@/assets/image/inpost.png';
import payment24 from '@/assets/image/przelewy24.png';
import blik from '@/assets/image/blik.png';
import paypo from '@/assets/image/paypo.png';
export const PaymentShippingFooter = () => {
  const { t } = useTranslation('payment-shipping-footer');
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('payment-and-shipping')}
        capitalization="md"
        weight="500"
        font="roboto"
      />
      <Typography
        as="p"
        text={t('free-shipping')}
        capitalization="xs"
        font="ptSans"
      />
      <Typography
        as="p"
        text={t('payments-info')}
        capitalization="xs"
        font="ptSans"
      />
      <div className={styles.payments}>
        <Image src={dpd} alt="DPD" width={100} />
        <Image src={dhl} alt="DHL" width={100} />
        <Image src={inpost} alt="InPost" width={100} />
        <Image src={payment24} alt="Przelewy24" width={100} />
        <Image src={blik} alt="Blik" width={100} />
        <Image src={paypo} alt="PayPo" width={100} />
      </div>
    </div>
  );
};
