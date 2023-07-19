import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Index</h1>
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
