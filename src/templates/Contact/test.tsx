import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Contact from '.';

// Mock para o componente Header
jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

describe('<Contact />', () => {
  it('should render the Contact page', () => {
    renderWithTheme(<Contact />);

    // Verifica se o Mock do Header foi chamado
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();
  });
});
