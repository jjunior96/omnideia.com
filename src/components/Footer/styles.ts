import { darken } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    padding-top: ${theme.spacings.medium};

    color: ${theme.colors.white};

    background-color: ${theme.colors.purple_300};

    ${HeadingStyles.Container} {
      text-transform: uppercase;

      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: minmax(auto, 50%) 1fr;
    gap: ${theme.grid.gutter};

    margin: 0 auto;

    margin-top: ${theme.spacings.medium};

    max-width: ${theme.grid.container};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;

      /* color: ${darken(0.2, theme.colors.gray_300)}; */
      color: ${theme.colors.white};

      text-decoration: none;

      margin-bottom: ${theme.spacings.xxsmall};

      font-size: ${theme.font.sizes.small};
    }

    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
      width: fit-content;
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    /* color: ${theme.colors.gray_300}; */

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`;
