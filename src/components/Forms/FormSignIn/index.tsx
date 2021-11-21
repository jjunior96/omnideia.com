import { FiUser as UserIcon, FiLock as PasswordIcon } from 'react-icons/fi';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import * as S from './styles';

const FormSignIn = () => {
  return (
    <Form>
      <S.Container>
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          icon={<UserIcon />}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          icon={<PasswordIcon />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button>Enter</Button>
      </S.Container>
    </Form>
  );
};

export default FormSignIn;
