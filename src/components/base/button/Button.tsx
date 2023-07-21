import styles from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  text: string;
  variant?: 'circled' | 'outlined' | 'square' | 'link';
  color?: 'transparent' | 'red' | 'light-gray' | 'green';
  textColor?: 'black' | 'white' | 'green' | 'red';
  textStyle?: 'normal' | 'italic' | 'bold' | 'underline';
  href?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'circled',
  className,
  textColor,
  color = 'transparent',
  textStyle = 'normal',
  href,
  disabled,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    styles[`textColor-${textColor}`],
    styles[`textStyle-${textStyle}`],
    className,
  );

  const commonProps = {
    className: classes,
  };

  if (href) {
    return (
      <Link href={href} {...rest} {...commonProps}>
        {text}
      </Link>
    );
  }
  return (
    <button {...rest} {...commonProps} disabled={disabled}>
      {text}
    </button>
  );
};
