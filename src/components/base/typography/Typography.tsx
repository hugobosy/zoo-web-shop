import { FC, HTMLProps } from 'react';

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  as: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  text?: string;
}

export const Typography: FC<TypographyProps> = ({ as, text }) => {
  const T = as;
  return <T>{text}</T>;
};
