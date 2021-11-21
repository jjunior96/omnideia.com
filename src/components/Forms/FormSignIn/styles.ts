import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    text-align: right;
    display: block;

    color: ${theme.colors.black};

    font-size: ${theme.font.sizes.xxsmall};
    text-decoration: none;

    transition: color ${theme.transition.fast};

    &:hover {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`;
