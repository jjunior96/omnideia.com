import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Base from '.';

// Mock para o componente Header
jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

// Mock para o componente Footer
jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Base>
        <h1>content</h1>
      </Base>
    );

    // Verifica se o Mock do Header foi chamado
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();

    // Verifica se renderizou o children
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument();

    // Verifica se o Mock do Footer foi chamado
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
  });
});
