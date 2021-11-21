import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    width: ${theme.grid.sidebar};
    height: 100vh;

    position: fixed;
    left: 0;

    background-color: ${theme.colors.black};

    display: flex;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.xsmall};
  `}
`;
