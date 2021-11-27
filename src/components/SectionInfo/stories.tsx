import { Story, Meta } from '@storybook/react/types-6-0';

import SectionInfo, { SectionInfoProps } from '.';
import InfoMock from './mock';

export default {
  title: 'SectionInfo',
  component: SectionInfo,
  args: {
    info: InfoMock
  },
  argTypes: {
    info: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<SectionInfoProps> = (args) => (
  <div style={{ margin: '0 auto', padding: '1rem' }}>
    <SectionInfo {...args} />
  </div>
);
