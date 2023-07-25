import { Typography } from '@/components/base/typography/Typography';

import styles from './Bar.module.scss';
import { useTranslation } from 'next-i18next';

export const Bar = () => {
  const { t } = useTranslation('info-bar');
  const information = [
    t('free-shipping'),
    t('promotion-three-packs'),
    t('join-to-newsletter'),
    t('to-lowest-price'),
  ];

  const infoBar = new Array(20);
  infoBar.fill(information);

  return (
    <div className={styles.bar}>
      {infoBar.map((info) =>
        info.map((i: string) => (
          <Typography
            key={i}
            as="p"
            text={i}
            capitalization="2xs"
            isUppercase
            color="gray-400"
            weight="600"
          />
        )),
      )}
    </div>
  );
};
