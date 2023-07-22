import { Typography } from '@/components/base/typography/Typography';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/form/input/Input';

export const HomePage = () => {
  return (
    <Layout>
      <Input type="text" required label="Text" placeholder="Name" />
    </Layout>
  );
};
