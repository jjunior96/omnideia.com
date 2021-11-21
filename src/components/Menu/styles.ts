import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuFullProps = {
  isOpen: boolean;
};

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    position: relative;
  `}
`;

export const LogoContainer = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    cursor: pointer;

    height: 2.4rem;
    width: 2.4rem;
  `}
`;

export const MenuNav = styled.div``;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    font-size: ${theme.font.sizes.medium};

    margin: 0.3rem ${theme.spacings.small};

    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '',
        position: absolute;
        display: block;

        height: 0.3rem;

        background-color: ${theme.colors.green};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }

        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${theme.colors.white};

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    height: 100vh;

    overflow: hidden;

    pointer-events: ${isOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease-in-out;

    opacity: ${isOpen ? 1 : 0};

    /* Icon Close */
    > svg {
      cursor: pointer;

      position: absolute;

      top: 0;
      right: 0;

      margin: ${theme.spacings.xsmall};

      width: 3.2rem;
      height: 3.2rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};

      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};

      margin-bottom: ${theme.spacings.small};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 ${theme.spacings.large} ${theme.spacings.large};

    > span {
      display: block;

      margin: ${theme.spacings.xxsmall} 0;

      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;

    color: ${theme.colors.green};

    font-size: ${theme.font.sizes.medium};

    border-bottom: 0.2rem solid ${theme.colors.green};
  `}
`;
