import { FC, HTMLProps } from 'react';
import {
  As,
  Colors,
  Fonts,
  Sizes,
  Weights,
} from '@/components/base/typography/Typograghy.types';
import classNames from 'classnames';

import styles from './Typography.module.scss';

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  as: As;
  color?: Colors;
  weight?: Weights;
  capitalization?: Sizes;
  font?: Fonts;
  text?: string;
  className?: string;
  isUppercase?: boolean;
}

export const Typography: FC<TypographyProps> = ({
  as,
  text,
  color,
  className,
  isUppercase,
  capitalization,
  weight,
  font,
}) => {
  const T = as;
  return (
    <T
      className={classNames(
        styles[`color-${color}`],
        styles[`size-${capitalization}`],
        styles[`weight-${weight}`],
        styles[`font-${font}`],
        isUppercase && styles.uppercase,
        className,
      )}
    >
      {text}
    </T>
  );
};
