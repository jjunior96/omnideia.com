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

    position: relative;

    svg {
      color: ${theme.colors.purple_300};

      width: 3.2rem;
      height: 3.2rem;
    }

    ${!!size && containerModifiers[size]}
    ${!!hideOnMobile && containerModifiers.hideOnMobile}
  `}
`;

type IconLightProps = {
  isHover: boolean;
};

export const IconLight = styled.div<IconLightProps>`
  ${({ theme, isHover }) => css`
    position: absolute;

    pointer-events: none;

    width: 1.4rem;
    height: 1.4rem;

    border-radius: 8px;

    left: 1rem;
    top: 0.3rem;

    ${isHover &&
    css`
      background-color: ${theme.colors.purple_300};
      box-shadow: 0 -2px 12px ${theme.colors.purple_300};
    `}
  `}
`;
