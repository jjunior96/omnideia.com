import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Spinner from '.';

describe('<Spinner />', () => {
  it('should render the Spinner component', () => {
    const { container } = renderWithTheme(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId('spinner')).toHaveStyle({
      width: '4rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Spinner with size small', () => {
    renderWithTheme(<Spinner size="small" />);

    expect(screen.getByTestId('spinner')).toHaveStyle({
      width: '2rem'
    });
  });
});
