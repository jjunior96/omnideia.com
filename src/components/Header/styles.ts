import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.grid.header};

    position: fixed;
    top: 0;

    box-shadow: ${theme.box.shadow};

    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
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
`;

export const MenuItem = styled.li`
  ${({ theme }) => css`
    text-decoration: none;
    list-style: none;

    color: ${theme.colors.white};

    & + li {
      margin-left: ${theme.spacings.small};
    }
  `}
`;

export const MenuName = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;
