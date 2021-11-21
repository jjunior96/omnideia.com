import { useState } from 'react';
import {
  RiMenu2Line as MenuIcon,
  RiSearchLine as SearchIcon,
  RiCloseLine as CloseIcon
} from 'react-icons/ri';

import Button from 'components/Button';
import Logo from 'components/Logo';

import * as S from './styles';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.IconContainer onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconContainer>

      <S.LogoContainer>
        <Logo hideOnMobile />
      </S.LogoContainer>

      <S.IconContainer>
        <SearchIcon aria-label="Search" />
      </S.IconContainer>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">Whishlist</S.MenuLink>
              <S.MenuLink href="#">My account</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button>Login</Button>
            <span>or</span>

            <S.CreateAccount href="#" title="Sign In">
              Create account
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Container>
  );
};

export default Menu;
