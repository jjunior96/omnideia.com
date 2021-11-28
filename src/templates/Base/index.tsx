import Footer from 'components/Footer';
import Header from 'components/Header';

import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
};

export default Base;
