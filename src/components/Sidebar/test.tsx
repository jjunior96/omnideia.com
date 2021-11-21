import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Sidebar from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    };
  }
}));

describe('<Sidebar />', () => {
  it('should render the Sidebar', () => {
    renderWithTheme(<Sidebar />);

    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });
});
