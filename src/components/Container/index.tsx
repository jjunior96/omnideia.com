import * as S from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
