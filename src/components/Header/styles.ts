import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.grid.header};

    position: fixed;
    top: 0;

    box-shadow: ${theme.box.shadow};

    background-color: ${theme.colors.white};

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

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;

  opacity: 1;
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    text-decoration: none;
    list-style: none;

    color: ${theme.colors.white};

    & + li {
      margin-left: ${theme.spacings.small};
    }

    ${media.lessThan('medium')`
    display: none;
    opacity: 0;
    `};
  `}
`;

export const MenuName = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};

    position: relative;

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

export const MenuSandwich = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.purple_300};
      cursor: pointer;

      ${media.greaterThan('medium')`
        display: none;
        opacity: 0;
      `};
    }
  `}
`;
