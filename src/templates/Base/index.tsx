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
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Container>
  );
};

export default Base;
