import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as ButtonStyles from 'components/Button/styles';
import * as CardInfoStyles from 'components/CardInfo/styles';
import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.div``;

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.grid.header};

    height: calc(100vh - ${theme.grid.header});

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;

      margin-top: calc(${theme.spacings.small} + ${theme.grid.header});
    `}
  `}
`;

export const SectionInfo = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Container} {
      width: 50%;

      margin-top: ${theme.spacings.medium};

      box-shadow: 0 0 32px ${theme.colors.purple_300};
    }

    ${media.lessThan('medium')`
      width: 100%;

      height: calc(100vh - 20rem);

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      ${ButtonStyles.Container} {
        width: 100%;
      }

      ${HeadingStyles.Container} {
        text-align: center;
        width: 100%;
      }
    `}
  `};
`;

export const SectionImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${media.lessThan('medium')`
      display: none;
      opacity: 0;
    `}
`;

export const SectionCards = styled.section`
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
      }
    `}
  `};
`;
