import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Header />);

    expect(
      screen.getByRole('heading', { name: /Header/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
