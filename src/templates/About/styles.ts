import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    max-width: ${theme.grid.container};
  `}
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 60rem;
  object-fit: cover;
`;

export const DescriptionContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxxlarge} 0;

    width: 100%;
    max-width: 50rem;
  `}
`;

export const AboutTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};

    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};

    margin-bottom: ${theme.spacings.xsmall};
  `};
`;

export const TitleDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    margin-bottom: ${theme.spacings.small};
  `};
`;

export const AboutDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xxsmall};
  `};
`;

export const CallToContact = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    ${ButtonStyles.Container} {
      width: 16rem;

      background-color: transparent;
      border: 2px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      margin-top: ${theme.spacings.xsmall};

      cursor: pointer;

      &:hover {
        box-shadow: 0 0 1.2rem ${theme.colors.primary};
      }
    }
  `};
`;

export const TitleContact = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};

    text-align: center;

    line-height: 1.5;

    span {
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `};
`;
