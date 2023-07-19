import '@/styles/globals.css';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/utils';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(getQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
