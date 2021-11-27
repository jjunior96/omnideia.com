import Link from 'next/link';
import { useState } from 'react';
import {
  BsLightbulb as IdeaOutlineIcon,
  BsLightbulbFill as IdeaFillIcon
} from 'react-icons/bs';

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
}: LogoProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Container color={color} size={size} hideOnMobile={hideOnMobile}>
      <S.IconLight isHover={isHover} />
      <Link href="/">
        <a
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? <IdeaFillIcon /> : <IdeaOutlineIcon data-testid="Logo" />}
        </a>
      </Link>
    </S.Container>
  );
};

export default Logo;
