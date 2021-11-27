import { IoAnalyticsOutline as AnalyticsIcon } from 'react-icons/io5';

import { Story, Meta } from '@storybook/react/types-6-0';

import CardInfo, { CardInfoProps } from '.';

export default {
  title: 'CardInfo',
  component: CardInfo,
  argTypes: {
    icon: { type: '' }
  }
} as Meta;

export const Default: Story<CardInfoProps> = (args) => <CardInfo {...args} />;

Default.args = {
  icon: <AnalyticsIcon />,
  title: 'Business Planing',
  iconColor: 'yellow',
  description:
    'Our Business Plan is a written document describing a companys core business activities, objectives, and how it plans to achieve its goals.'
};
