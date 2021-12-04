import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuFullProps = {
  isOpen: boolean;
};

export const Container = styled.menu`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.grid.header};

    position: fixed;
    top: 0;

    box-shadow: ${theme.box.shadow};

    background-color: rgba(255, 255, 255, 0.7);

    backdrop-filter: blur(10px);

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;

    max-width: ${theme.grid.container};

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const LogoContainer = styled.div``;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    cursor: pointer;

    > svg {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.purple_300};
    }

    ${media.greaterThan('medium')`
      display: none;
      opacity: 0;
    `};
  `}
`;

export const MenuNavFull = styled.ul`
  display: flex;
  align-items: center;

  opacity: 1;

  ${media.lessThan('medium')`
    display: none;
    opacity: 0;
  `};
`;

export const MenuNav = styled.ul``;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    list-style: none;

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

export const MenuName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    position: relative;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `};

    &::after {
      transition: opacity ${theme.transition.fast},
        transform ${theme.transition.fast};

      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      bottom: -1rem;
      border-bottom: 0.2rem solid ${theme.colors.purple_300};
      opacity: 0;
      transform: translateY(0.5rem);
    }

    &:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: 100%;
        border-bottom: 0.2rem solid ${theme.colors.purple_300};
        opacity: 1;
        transform: translateY(0);
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

    color: ${theme.colors.purple_300};

    font-size: ${theme.font.sizes.medium};

    border-bottom: 0.2rem solid ${theme.colors.purple_300};
  `}
`;
