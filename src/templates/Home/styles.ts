import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Container = styled.div``;

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.grid.header};

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
  `}
`;

export const SectionInfo = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Container} {
      width: 50%;

      margin-top: ${theme.spacings.medium};
    }
  `};
`;

export const SectionImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
