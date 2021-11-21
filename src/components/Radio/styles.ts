import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;

    border: 0.2rem solid ${theme.colors.green};

    width: 1.8rem;
    height: 1.8rem;

    cursor: pointer;

    background: transparent;

    border-radius: 50%;

    color: ${theme.colors.black};

    margin-right: ${theme.spacings.xxxsmall};
    outline: none;

    transition: background ${theme.transition.fast};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.green};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;

      border-radius: 50%;

      background: ${theme.colors.green};
      transition: opacity ${theme.transition.fast};

      opacity: 0;

      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;
