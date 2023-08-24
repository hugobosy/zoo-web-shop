import styles from './Register.module.scss';
import { useTranslation } from 'next-i18next';
import { Typography } from '@/components/base/typography/Typography';
import { Button } from '@/components/base/button/Button';
export const Register = () => {
  const { t } = useTranslation('my-account');

  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('no-account')}
        capitalization="xl"
        weight="500"
        font="roboto"
        className={styles.header}
      />
      <Typography
        as="p"
        text={t('registration-benefits')}
        capitalization="sm"
        font="roboto"
      />

      <ul className={styles.list}>
        <li className={styles.listElement}>
          <Typography
            as="span"
            text={t('fast-shipping')}
            capitalization="xs"
            font="roboto"
          />
        </li>
        <li className={styles.listElement}>
          <Typography
            as="span"
            text={t('order-history')}
            capitalization="xs"
            font="roboto"
          />
        </li>
        <li className={styles.listElement}>
          <Typography
            as="span"
            text={t('billing-for-clients')}
            capitalization="xs"
            font="roboto"
          />
        </li>
      </ul>

      <Button
        text={t('create-account')}
        type="button"
        textColor="white"
        color="red"
        className={styles.button}
        variant="circled"
      />
    </div>
  );
};
