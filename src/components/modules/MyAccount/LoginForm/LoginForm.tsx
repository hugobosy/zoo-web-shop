import styles from './LoginForm.module.scss';
import { Typography } from '@/components/base/typography/Typography';
import { useTranslation } from 'next-i18next';
import { Form, useFormik } from 'formik';
import { Input } from '@/components/form/input/Input';
import { Button } from '@/components/base/button/Button';
export const LoginForm = () => {
  const { t } = useTranslation('my-account');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => alert(JSON.stringify(values)),
  });
  return (
    <div className={styles.wrapper}>
      <Typography
        as="h4"
        text={t('onLogin')}
        weight="500"
        font="roboto"
        capitalization="xl"
        className={styles.header}
      />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input
          placeholder={t('email')}
          type="text"
          name="email"
          onChange={formik.handleChange}
        />
        <Input
          placeholder={t('password')}
          type="password"
          name="password"
          onChange={formik.handleChange}
        />
        <Button
          text={t('login')}
          type="submit"
          color="red"
          textColor="white"
          textSize="base"
          className={styles.button}
        />
      </form>
      <Button
        text={t('forgot-password')}
        href={'#'}
        className={styles.reminder}
        textColor="gray"
        textSize="base"
      />
    </div>
  );
};
