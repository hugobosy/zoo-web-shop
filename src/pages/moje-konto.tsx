import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MyAccountTemplate } from '@/components/templates/MyAccount/MyAccount';

export default function MyAccount() {
  return <MyAccountTemplate />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'pl')),
    },
  };
};
