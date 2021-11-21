import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form correctly', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    // Input email
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();

    // Input password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Button de submit
    expect(screen.getByRole('button', { name: /enter/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render forgot text and link', () => {
    renderWithTheme(<FormSignIn />);

    // Texto do link de forgot password
    expect(screen.getByText(/forgot your password/i)).toBeInTheDocument();

    // Link de forgot password
    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument();
  });
});
