import styles from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Icon, IconNames } from '@/components/base/icon/Icon';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  text: string;
  variant?: 'circled' | 'outlined' | 'square' | 'link';
  color?: 'transparent' | 'red' | 'light-gray' | 'green';
  textColor?: 'black' | 'white' | 'green' | 'red' | 'gray';
  textStyle?: 'normal' | 'italic' | 'bold' | 'underline';
  textSize?: 'xxs' | 'xs' | 's' | 'base' | 'm' | 'l' | 'xl' | 'xxl';
  href?: string;
  disabled?: boolean;
  icon?: IconNames;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'reset' | 'submit';
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
  icon,
  textSize,
  type,
  iconPosition = 'left',
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`color-${color}`],
    styles[`textColor-${textColor}`],
    styles[`textStyle-${textStyle}`],
    styles[`textSize-${textSize}`],
    className,
  );

  const commonProps = {
    className: classes,
  };

  const iconInner = icon && <Icon name={icon as IconNames} />;

  if (href) {
    return (
      <Link href={href} {...rest} {...commonProps}>
        {iconPosition === 'left' && (
          <>
            {iconInner}
            {text}
          </>
        )}
        {iconPosition === 'right' && (
          <>
            {text}
            {iconInner}
          </>
        )}
      </Link>
    );
  }
  return (
    <button {...rest} {...commonProps} disabled={disabled}>
      {iconPosition === 'left' && (
        <>
          {iconInner}
          {text}
        </>
      )}
      {iconPosition === 'right' && (
        <>
          {text}
          {iconInner}
        </>
      )}
    </button>
  );
};
