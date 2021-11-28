import styled, { css } from 'styled-components';

import * as CheckboxStyles from 'components/Checkbox/styles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 50rem;
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
