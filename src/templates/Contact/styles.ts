import { darken } from 'polished';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as CheckboxStyles from 'components/Checkbox/styles';
import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;

    height: calc(100vh - ${theme.grid.header});

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    margin-top: ${theme.grid.header};

    > form {
      max-width: 50rem;

      margin: 0 auto;
    }

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
    `}
  `};
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - ${theme.grid.header});

    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);

    border-radius: 0 2rem 2rem 0;

    position: relative;

    background-image: url('/img/idea-bg.jpeg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;

    &::after {
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
      background-image: linear-gradient(
        to bottom,
        ${theme.colors.purple_300},
        ${darken(0.3, theme.colors.purple_300)}
      );
      opacity: 0.4;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const ImageInfo = styled.div`
  ${({ theme }) => css`
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;

    z-index: ${theme.layers.alwaysOnTop};

    color: ${theme.colors.white};

    ${HeadingStyles.Container} {
      font-size: ${theme.font.sizes.huge};

      text-align: center;
    }
  `};
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    margin-top: ${theme.spacings.xsmall};

    color: ${theme.colors.gray_300};

    span {
      color: ${theme.colors.purple_300};
      font-weight: ${theme.font.bold};

      cursor: pointer;
    }
  `}
`;

export const ServicesContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    width: 100%;
  `};
`;

export const ServicesContent = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.xxxsmall};

    ${CheckboxStyles.Label} {
      font-weight: ${theme.font.bold};
    }
  `};
`;

export const SectionTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};

    color: ${theme.colors.gray_300};

    line-height: 1;
  `};
`;
