import Image from 'next/image';

import { v4 } from 'uuid';

export const SidebarData = [
  {
    id: v4(),
    name: 'Home',
    path: '/',
    icon: <Image src="/assets/icon_portaria.svg" width="26" height="26" />
  },
  {
    id: v4(),
    name: 'About',
    path: '/about',
    icon: <Image src="/assets/icon_portaria.svg" width="26" height="26" />
  }
];
