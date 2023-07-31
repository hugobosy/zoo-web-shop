import styles from './ContactFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import vet from '@/assets/image/vet.jpg';
export const ContactFooter = () => {
  const { t } = useTranslation('contact-footer');
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('contact')}
        font="roboto"
        weight="500"
        capitalization="lg"
      />
      <div>
        <Typography
          as="p"
          text={t('service')}
          font="ptSans"
          capitalization="sm"
        />
        <Typography
          as="p"
          text={t('contact-phone')}
          font="ptSans"
          capitalization="sm"
          icon="Phone"
          className={styles.contact}
        />
      </div>

      <div>
        <Typography
          as="p"
          text={t('write-us')}
          font="ptSans"
          capitalization="sm"
        />
        <Typography
          as="p"
          text={t('contact-email')}
          font="ptSans"
          capitalization="sm"
          icon="Envelope"
          className={styles.contact}
        />
        <Image src={vet} alt="VET" width={100} className={styles.vet} />
      </div>
    </div>
  );
};
