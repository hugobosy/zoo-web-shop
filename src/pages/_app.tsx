import '@/styles/globals.css';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
