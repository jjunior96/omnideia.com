import { useState } from 'react';
import {
  RiMenu3Fill as MenuIcon,
  RiCloseLine as CloseIcon
} from 'react-icons/ri';

import ActiveLink from 'components/ActiveLink';
import Button from 'components/Button';
import Logo from 'components/Logo';

import HeaderData from './data';
import * as S from './styles';

export type HeaderProps = {
  username?: string;
};

const Header = ({ username }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <Logo color="black" />
        </S.LogoContainer>

        <S.IconContainer onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconContainer>

        <S.MenuNavFull>
          {HeaderData.map((item) => (
            <S.MenuItem key={item.id}>
              <ActiveLink href={item.path}>
                <S.MenuName>{item.name}</S.MenuName>
              </ActiveLink>
            </S.MenuItem>
          ))}
        </S.MenuNavFull>

        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

          <S.MenuNav>
            {HeaderData.map((item) => (
              <S.MenuItem key={item.id}>
                <ActiveLink href={item.path}>
                  <S.MenuName>{item.name}</S.MenuName>
                </ActiveLink>
              </S.MenuItem>
            ))}

            {!!username && (
              <>
                <ActiveLink href="#">
                  <S.MenuName>Whishlist</S.MenuName>
                </ActiveLink>
                <ActiveLink href="#">
                  <S.MenuName>My account</S.MenuName>
                </ActiveLink>
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
      </S.Content>
    </S.Container>
  );
};

export default Header;
