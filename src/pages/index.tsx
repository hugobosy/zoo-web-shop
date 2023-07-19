import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HomePage } from '@/components/templates/HomePage/HomePage';
export default function Home() {
  return (
    <>
      <HomePage />
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
