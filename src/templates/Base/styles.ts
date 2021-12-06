import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.grid.header} 0 0;
  `}
`;
