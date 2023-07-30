import styles from './AboutUsFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';

import Opineo from '@/assets/svg/opineo.svg';
import Image from 'next/image';
export const AboutUsFooter = () => {
  const { t } = useTranslation('about-us-footer');
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('about-us')}
        capitalization="md"
        weight="500"
        font="roboto"
      />
      <Typography
        as="p"
        text={t('about-us-description')}
        font="ptSans"
        capitalization="xs"
      />
      <div className={styles.opineo}>
        <Opineo />
      </div>
    </div>
  );
};
