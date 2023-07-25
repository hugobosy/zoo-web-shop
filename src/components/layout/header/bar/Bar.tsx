import { Typography } from '@/components/base/typography/Typography';

import styles from './Bar.module.scss';

export const Bar = () => {
  return (
    <div className={styles.bar}>
      <Typography as="span" text="Darmowa dostawa od 99zł" />
    </div>
  );
};
