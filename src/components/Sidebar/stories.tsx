import { Story, Meta } from '@storybook/react/types-6-0';

import Sidebar from '.';

export default {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story = (args) => <Sidebar {...args} />;
