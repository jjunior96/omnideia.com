import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as CardInfoStyles from 'components/CardInfo/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxxlarge} 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;

      margin-top: -5rem;

      ${CardInfoStyles.Container} {
        margin-top: ${theme.spacings.small};

        text-align: center;
      }
    `}
  `};
`;
