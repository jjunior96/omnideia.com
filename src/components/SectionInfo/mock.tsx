import { BiSearch as SearchIcon } from 'react-icons/bi';
import { GiReceiveMoney as MoneyIcon } from 'react-icons/gi';
import { IoAnalyticsOutline as AnalyticsIcon } from 'react-icons/io5';

import { CardInfoProps } from 'components/CardInfo';

type InfoSectionMockProps = {
  id: string;
} & CardInfoProps;

const infoSectionMock: InfoSectionMockProps[] = [
  {
    id: '1',
    icon: <AnalyticsIcon />,
    title: 'Business Planing',
    iconColor: 'yellow',
    description:
      'Our Business Plan is a written document describing a companys core business activities, objectives, and how it plans to achieve its goals.'
  },
  {
    id: '2',
    icon: <MoneyIcon />,
    title: 'Financial Planing',
    iconColor: 'green',
    description:
      'OurExpert team sensible decisions about their money, to ensure they achieve their life goals. A financial plan, generally, provides a roadmap for achieving your life goals.'
  },
  {
    id: '3',
    icon: <SearchIcon />,
    title: 'Market Analysis',
    iconColor: 'purple',
    description:
      'A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market both in volume and in value the various customer segments and buying.'
  }
];

export default infoSectionMock;
