import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const { container } = renderWithTheme(<Logo data-testid="Logo" />);

    expect(screen.getByTestId(/logo/i)).toHaveStyle({
      color: theme.colors.purple_300
    });

    expect(container).toMatchSnapshot();
  });
});
