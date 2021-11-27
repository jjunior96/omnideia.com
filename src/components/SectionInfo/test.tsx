import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import SectionInfo from '.';
import infoMock from './mock';

describe('<SectionInfo />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SectionInfo info={infoMock} />);

    expect(screen.getByLabelText(/section info/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
