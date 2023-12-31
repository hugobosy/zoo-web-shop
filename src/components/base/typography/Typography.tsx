import type { FC, HTMLProps } from 'react';
import type {
  As,
  Colors,
  Fonts,
  Sizes,
  Weights,
} from '@/components/base/typography/Typograghy.types';
import classNames from 'classnames';
import parse from 'html-react-parser';

import styles from './Typography.module.scss';
import { Icon, IconNames } from '@/components/base/icon/Icon';

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  as: As;
  color?: Colors;
  weight?: Weights;
  capitalization?: Sizes;
  font?: Fonts;
  text?: string;
  className?: string;
  isUppercase?: boolean;
  icon?: IconNames;
}

export const Typography: FC<TypographyProps> = ({
  as = 'p',
  text,
  color = 'black',
  className,
  isUppercase,
  capitalization = 'base',
  weight = '400',
  font,
  icon,
  children,
}) => {
  const T = as;

  const textInner = text?.toString().replace('\n', `<br>`);
  const content = children ? children : parse(textInner || '');
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
      {icon && <Icon name={icon} />} {content}
    </T>
  );
};
