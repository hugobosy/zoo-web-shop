import styles from './Input.module.scss';
import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Typography } from '@/components/base/typography/Typography';
import { Icon, IconNames } from '@/components/base/icon/Icon';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  message?: string;
  type?: 'text' | 'email' | 'password';
  state?: string;
  icon?: IconNames;
}
export const Input: FC<InputProps> = ({
  label,
  required,
  message,
  className,
  type,
  icon,
  ...rest
}) => {
  return (
    <div className={classNames(styles.inputWrapper, className)}>
      {label && (
        <div className={styles.labelWrapper}>
          <Typography
            as="label"
            htmlFor={rest.name}
            className={styles.label}
            text={label}
          />
        </div>
      )}
      <input
        type={type}
        required={required}
        className={styles.input}
        {...rest}
      />
      {icon && <Icon name={icon} className={styles.icon} />}
    </div>
  );
};
