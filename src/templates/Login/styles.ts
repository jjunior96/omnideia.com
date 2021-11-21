import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  ${({ theme }) => css`
    position: relative;

    background-image: url('/assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    width: 100vw;
    height: 100vh;

    &:after {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background: ${theme.colors.black};
      opacity: 0.7;
    }
  `};
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 46rem;

    position: absolute;

    backdrop-filter: blur(10px);

    padding: ${theme.spacings.small};

    box-shadow: 0 12px 14px rgba(0, 0, 0, 0.4);

    border: 2px solid ${theme.colors.green};

    border-radius: ${theme.border.radius};

    > form {
      width: 100%;
    }
  `}
`;
