import styles from './ContactFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
export const ContactFooter = () => {
  const { t } = useTranslation('contact-footer');
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('contact')}
        font="roboto"
        weight="500"
        capitalization="md"
      />
      <Typography
        as="p"
        text={t('service')}
        font="ptSans"
        capitalization="xs"
      />
      <Typography
        as="p"
        text={t('contact-phone')}
        font="ptSans"
        capitalization="xs"
        icon="Phone"
        className={styles.contact}
      />
    </div>
  );
};
