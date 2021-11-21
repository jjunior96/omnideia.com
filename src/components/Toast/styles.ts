import { ToastContainer } from 'react-toastify';

import styled, { css } from 'styled-components';

export const Toast = styled(ToastContainer)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    .Toastify__toast--info {
      background-color: ${theme.colors.info};
    }
    .Toastify__toast--success {
      background-color: ${theme.colors.green};
    }
    .Toastify__toast--warning {
      background-color: ${theme.colors.yellow_300};
    }
    .Toastify__toast--error {
      background-color: ${theme.colors.error};
    }
  `}
`;
