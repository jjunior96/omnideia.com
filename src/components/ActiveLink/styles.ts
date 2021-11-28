import { shade } from 'polished';
import styled, { css } from 'styled-components';

type LinkActivedProps = {
  isActive: boolean;
};

export const LinkActived = styled.a<LinkActivedProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    cursor: pointer;

    width: 100%;

    color: ${theme.colors.gray_300};

    padding: ${theme.spacings.xxxsmall} ${theme.spacings.xsmall};

    text-decoration: none;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};

    transition: color ${theme.transition.default};

    ${isActive &&
    css`
      color: ${shade(0.2, theme.colors.purple_300)};

      p {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.5rem;
          width: 100%;
          border-bottom: 0.2rem solid ${theme.colors.purple_300};
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}

    &:hover {
      color: ${shade(0.2, theme.colors.purple_300)};
    }
  `}
`;
