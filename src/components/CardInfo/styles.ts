import { lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { IconColors } from '.';

type IconContainerProsp = {
  iconColor?: IconColors;
};

export const Container = styled.div`
  display: flex;

  width: 100%;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.spacings.xsmall};

    width: 100%;
  `};
`;

const iconContainerModifiers = {
  yellow: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.3, theme.colors.yellow_300)};

    > svg {
      color: ${theme.colors.yellow_300};
    }
  `,

  green: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.3, theme.colors.green)};

    > svg {
      color: ${theme.colors.green};
    }
  `,
  purple: (theme: DefaultTheme) => css`
    background-color: ${lighten(0.3, theme.colors.purple_300)};

    > svg {
      color: ${theme.colors.purple_300};
    }
  `
};

export const IconContainer = styled.div<IconContainerProsp>`
  ${({ theme, iconColor }) => css`
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xsmall};

    width: fit-content;
    height: fit-content;

    > svg {
      font-size: ${theme.font.sizes.xlarge};
    }

    ${!!iconColor && iconContainerModifiers[iconColor!](theme)}
  `};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.gray_500};
  `};
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};

    color: ${theme.colors.gray_300};

    max-width: 80%;

    line-height: 1.6;
  `};
`;
