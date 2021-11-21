import ActiveLink from 'components/ActiveLink';
import Button from 'components/Button';
import Input from 'components/Input';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

import * as S from './styles';

const Dashboard = () => {
  return (
    <Main>
      <Sidebar />
      <S.Container>
        <h2>Test</h2>

        <Input name="input" placeholder="Insira o nome" label="Nome" />

        <ActiveLink href="/">
          <p>Entrar</p>
        </ActiveLink>

        <Button>Enter</Button>
      </S.Container>
    </Main>
  );
};

export default Dashboard;
