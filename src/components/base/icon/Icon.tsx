import { ComponentProps, FC, useMemo } from 'react';
import { icons } from '@/components/base/icon/icon.const';

export type IconNames = keyof typeof icons;

interface IconProps extends ComponentProps<'svg'> {
  name: IconNames & string;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const Component = useMemo(() => icons[name] as () => JSX.Element, [name]);

  return <Component {...props} />;
};
