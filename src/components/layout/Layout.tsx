import styles from './Layout.module.scss';
import { Header } from '@/components/layout/header/Header';
import React, { ComponentPropsWithoutRef, FC } from 'react';
import { Footer } from '@/components/layout/footer/Footer';
import { Main } from '@/components/base/main/Main';

interface LayoutProps extends ComponentPropsWithoutRef<'div'> {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
