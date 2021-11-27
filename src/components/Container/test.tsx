import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Container from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <p>Test container</p>
      </Container>
    );

    expect(screen.getByText(/test container/i)).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      'max-width': '130rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
