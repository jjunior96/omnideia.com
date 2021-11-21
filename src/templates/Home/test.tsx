import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

// Mock para o componente Header
jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render the Home page', () => {
    renderWithTheme(<Home />);

    // Verifica se o Mock do Header foi chamado
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();
  });
});
