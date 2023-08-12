import styles from './MyAccount.module.scss';
import { Layout } from '@/components/layout/Layout';
import { Register } from '@/components/modules/MyAccount/Register/Register';
import { LoginForm } from '@/components/modules/MyAccount/LoginForm/LoginForm';
export const MyAccountTemplate = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <LoginForm />
        </div>
        <div className={styles.block}>
          <Register />
        </div>
      </div>
    </Layout>
  );
};
