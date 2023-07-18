import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <h1 className={styles.header}>{t('welcome')}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'pl')),
    },
  };
};
