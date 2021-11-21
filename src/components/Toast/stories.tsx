import { Story, Meta } from '@storybook/react/types-6-0';

import Toast, { ToastProps } from '.';

export default {
  title: 'Toast',
  component: Toast
} as Meta;

export const Default: Story<ToastProps> = (args) => <Toast {...args} />;

Default.args = {
  messages: [
    {
      id: '1',
      type: 'info',
      title: 'Toast'
    }
  ]
};
