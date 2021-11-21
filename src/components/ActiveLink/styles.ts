import { shade } from 'polished';
import styled, { css } from 'styled-components';

type LinkActivedProps = {
  isActive: boolean;
};

export const LinkActived = styled.a<LinkActivedProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;

    width: 100%;

    color: ${theme.colors.gray_300};

    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall};

    text-decoration: none;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};

    transition: color ${theme.transition.default};

    p {
      margin-left: ${theme.spacings.xxsmall};
    }

    ${isActive &&
    css`
      color: ${shade(0.2, theme.colors.purple_300)};
    `}

    &:hover {
      color: ${shade(0.2, theme.colors.purple_300)};
    }
  `}
`;
