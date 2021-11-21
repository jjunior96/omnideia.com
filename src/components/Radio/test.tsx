import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import Radio from '.';

describe('<Radio />', () => {
  it('should render the Radio component', () => {
    const { container } = renderWithTheme(<Radio label="Radio" value="any" />);

    expect(screen.getByRole('radio', { name: /Radio/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Radio without label', () => {
    renderWithTheme(<Radio value="any" />);

    expect(screen.queryByLabelText(/Radio/i)).not.toBeInTheDocument();
  });

  it('should dispatch onCheck when user click on element', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Radio name="checkbox" onCheck={onCheck} />);

    // Não deve chamar a funcao onCheck
    expect(onCheck).not.toHaveBeenCalled();

    // Ao clicar no elemento, deve chamar a funcao onCheck
    userEvent.click(screen.getByRole('radio'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio name="Radio" label="Check" />);

    // No inicio, o focus deve estar no body da pagina
    expect(document.body).toHaveFocus();

    // Ao apertar em tab, o focus deve estar no checkbox
    userEvent.tab();

    expect(screen.getByRole('radio')).toHaveFocus();
  });
});
