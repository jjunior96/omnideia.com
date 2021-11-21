import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray_300};
    margin: 0;
    padding: 0;
    line-height: 1;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: transparent;
    border: 0;
    margin-right: ${theme.spacings.xxxsmall};
    outline: none;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.green};
    }
  `}
`;
