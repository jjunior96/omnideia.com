import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Login from '.';

describe('<Login />', () => {
  it('should render correctly page', () => {
    renderWithTheme(<Login />);

    // Verifica se input de email foi renderizado
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();

    // Verifica se input de password foi renderizado
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // Verifica se o botão de submit foi renderizado
    expect(screen.getByRole('button', { name: /enter/i })).toBeInTheDocument();
  });
});
