import { RiMenu3Fill as MenuIcon } from 'react-icons/ri';

import ActiveLink from 'components/ActiveLink';
import Logo from 'components/Logo';

import HeaderData from './data';
import * as S from './styles';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo color="black" />

        <S.MenuContainer>
          {HeaderData.map((item) => (
            <S.MenuItem key={item.id}>
              <ActiveLink href={item.path}>
                <S.MenuName>{item.name}</S.MenuName>
              </ActiveLink>
            </S.MenuItem>
          ))}

          <S.MenuSandwich>
            <MenuIcon />
          </S.MenuSandwich>
        </S.MenuContainer>
      </S.Content>
    </S.Container>
  );
};

export default Header;
