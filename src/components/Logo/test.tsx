import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const { container } = renderWithTheme(<Logo />);

    // 1 - Pega o elemento que tem um LabelText = Won Games
    // 2 - Com o `parantElement`, pega o pai do elemento com LabelText Won Games
    // 3 - Verifica se o elemento pai tem o estilo esperado
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    });

    expect(container).toMatchSnapshot();
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#0D0D0D'
    });
  });

  it('should render with size default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render with size large', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });
});
