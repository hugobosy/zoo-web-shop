import { ComponentPropsWithoutRef, FC } from 'react';

interface MainProps extends ComponentPropsWithoutRef<'main'> {}

export const Main: FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};
