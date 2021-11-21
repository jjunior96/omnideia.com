import { Story, Meta } from '@storybook/react/types-6-0';

import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta;

export const Default: Story = (args) => (
  <div style={{ width: '36rem', margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
);
