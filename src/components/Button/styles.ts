import { lighten, darken } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type IconContainerProps = Pick<ButtonProps, 'positionIcon'>;

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 2.4rem;

    font-size: ${theme.font.sizes.xxsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 3.2rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5.6rem;

    font-size: ${theme.font.sizes.xsmall};
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;

    color: ${theme.colors.green};

    font-weight: ${theme.font.normal};

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.1, theme.colors.green)};
    }
  `
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, color, size, minimal, positionIcon }) => css`
    width: 100%;

    color: ${theme.colors.white};
    background-color: ${theme.colors[color!]};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: ${theme.border.radius};
    border: 0;

    padding: 0 ${theme.spacings.xsmall};
    padding-${positionIcon}: ${theme.spacings.small};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};

    transition: background-color 0.3s, box-shadow 0.2s, outline 0.1s;

    outline: none;

    &:focus {
      outline: 3px solid ${lighten(0.2, theme.colors.purple_300)};
    }

    ${
      !minimal &&
      css`
        &:hover {
          background-color: ${darken(0.05, theme.colors[color!])};

          box-shadow: ${theme.box.shadow};
        }
      `
    }

    ${!!size && containerModifiers[size](theme)};

    ${!!minimal && containerModifiers.minimal(theme)};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme, positionIcon }) => css`
    font-size: ${theme.font.sizes.medium};

    display: flex;
    align-items: center;

    align-self: center;

    ${positionIcon === 'right'
      ? css`
          margin-left: ${theme.spacings.xsmall};
        `
      : css`
          margin-right: ${theme.spacings.xsmall};
        `}

    order: ${positionIcon === 'right' ? 1 : 0};
  `}
`;
