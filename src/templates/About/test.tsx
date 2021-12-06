import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import About from '.';

// Mock para o componente Header
jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

describe('<About />', () => {
  it('should render correctly', () => {
    renderWithTheme(<About />);

    expect(
      screen.getByRole('heading', { name: /about 10 projects/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /people work together/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/about omnideia/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/contact'
    );
  });
});
