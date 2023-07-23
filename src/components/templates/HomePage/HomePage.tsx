import { Typography } from '@/components/base/typography/Typography';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/form/input/Input';
import Link from 'next/link';
import { Button } from '@/components/base/button/Button';
import { Icon } from '@/components/base/icon/Icon';

export const HomePage = () => {
  return (
    <Layout>
      <Input type="text" required label="Text" placeholder="Name" />
    </Layout>
  );
};
