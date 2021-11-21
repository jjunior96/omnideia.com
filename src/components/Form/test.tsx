import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Form from '.';

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = renderWithTheme(
      <Form aria-label="User info" name="userinfo">
        <input aria-label="username" placeholder="Username" />
      </Form>
    );

    expect(
      screen.getByRole('textbox', { name: /username/i }).parentElement
    ).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',

      width: '100%',

      padding: '0 2.4rem'
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
