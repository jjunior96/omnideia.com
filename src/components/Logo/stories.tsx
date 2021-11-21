import { Story, Meta } from '@storybook/react/types-6-0';

import Logo, { LogoProps } from '.';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta;

export const Default: Story<LogoProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Logo {...args} />
  </div>
);

Default.args = {
  color: 'black',
  size: 'normal'
};
