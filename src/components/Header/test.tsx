import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

// Mock para o componente ActiveLink
jest.mock('components/ActiveLink', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ActiveLink">ActiveLink</div>;
    }
  };
});

describe('<Header />', () => {
  it('should render the component correctly', () => {
    renderWithTheme(<Header />);

    // Verifica se esta renderizando o ActiveLink
    expect(screen.getAllByText(/activeLink/i));
  });
});
