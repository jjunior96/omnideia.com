import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render the Checkbox component', () => {
    const { container } = renderWithTheme(
      <Checkbox aria-label="name-checkbox" label="Checkbox" />
    );

    const labelElement = screen.getByText(/checkbox/i);

    // Label test
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveStyle({
      'font-size': '1.6rem',
      color: theme.colors.gray_300,
      margin: 0,
      padding: 0
    });

    const inputElement = screen.getByRole('checkbox', {
      name: /name-checkbox/i
    });

    // Input test
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({
      color: theme.colors.gray_300,
      background: 'transparent',
      border: '0',
      'margin-right': '0.8rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should dispatch checked when user click on element', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox name="checkbox" onCheck={onCheck} />);

    // Não deve chamar a funcao onCheck
    expect(onCheck).not.toHaveBeenCalled();

    // Ao clicar no elemento, deve chamar a funcao onCheck
    fireEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should render with checked when isChecked passed', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox name="checkbox" onCheck={onCheck} isChecked />);

    // Ao clicar no elemento, deve chamar a funcao onCheck
    fireEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox name="checkbox" label="Check" />);

    // No inicio, o focus deve estar no body da pagina
    expect(document.body).toHaveFocus();

    // Ao apertar em tab, o focus deve estar no checkbox
    userEvent.tab();

    expect(screen.getByRole('checkbox')).toHaveFocus();
  });
});
