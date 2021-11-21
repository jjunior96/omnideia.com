import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

const containerModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      img {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
};

export const Container = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    svg {
      color: ${theme.colors.purple_300};

      width: 3.2rem;
      height: 3.2rem;
    }

    ${!!size && containerModifiers[size]}
    ${!!hideOnMobile && containerModifiers.hideOnMobile}
  `}
`;
