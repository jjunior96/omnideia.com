import Link from 'next/link';
import { BsLightbulb as IdeaIcon } from 'react-icons/bs';

import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
  hideOnMobile?: boolean;
  id?: string;
};

const Logo = ({
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Container color={color} size={size} hideOnMobile={hideOnMobile}>
    <Link href="/">
      <a>
        <IdeaIcon />
      </a>
    </Link>
  </S.Container>
);

export default Logo;
