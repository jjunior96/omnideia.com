import { IoAnalyticsOutline as Icon } from 'react-icons/io5';

import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import theme from 'styles/theme';

import CardInfo from '.';

const props = {
  title: 'Title',
  description: 'Description'
};

describe('<CardInfo />', () => {
  it('should render correctly', () => {
    renderWithTheme(<CardInfo {...props} />);

    // Titulo
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();

    // Descrição
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });

  it('should render without description, only title', () => {
    renderWithTheme(<CardInfo title={props.title} />);

    // Titulo
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();

    // Descrição
    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
  });

  it('should render icon when passed', () => {
    renderWithTheme(
      <CardInfo title={props.title} icon={<Icon data-testid="icon" />} />
    );

    // Titulo
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();

    // Descrição
    expect(screen.queryByText(/description/i)).not.toBeInTheDocument();

    // Icone
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });

  it('should render color icon when passed', () => {
    renderWithTheme(
      <CardInfo
        title={props.title}
        iconColor="green"
        icon={<Icon data-testid="icon" />}
      />
    );

    // Icone com cor verde
    expect(screen.getByTestId(/icon/i)).toHaveStyle({
      color: theme.colors.green
    });
  });
});
