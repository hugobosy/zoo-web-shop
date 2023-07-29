import styles from './NewsletterFooter.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import gift from '@/assets/image/gift.png';
import { FormikInput } from '@/components/formik/FormikInput';
import { Input } from '@/components/form/input/Input';
import { Button } from '@/components/base/button/Button';
export const NewsletterFooter = () => {
  const { t } = useTranslation('newsletter-footer');
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h2"
        text={t('join-newsletter')}
        capitalization="md"
        font="roboto"
        weight="500"
      />
      <div className={styles.content}>
        <div className={styles['content-left']}>
          <Image src={gift} alt={t('join-newsletter')} width={75} height={75} />
        </div>
        <div className={styles['content-right']}>
          <Typography
            as="h5"
            text={t('what-do-you-get')}
            capitalization="sm"
            weight="600"
            font="ptSans"
          />
          <ul className={styles.list}>
            <li>
              <Typography
                as="span"
                text={t('discounts')}
                capitalization="xs"
                font="ptSans"
              />
            </li>
            <li>
              <Typography
                as="span"
                text={t('information')}
                capitalization="xs"
                font="ptSans"
              />
            </li>
          </ul>
          <form className={styles.form}>
            <Input name="email" placeholder={t('your-email')} />
            <Button
              text={t('save')}
              type="submit"
              variant="circled"
              color="green"
              className={styles.button}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
