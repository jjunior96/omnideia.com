import { useCallback } from 'react';

import { useToast } from 'hooks/toast';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import * as S from './styles';

const Login = () => {
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(event);

      addToast({
        title: 'Foi',
        type: 'success'
      });
    },
    [addToast]
  );

  return (
    <S.Container>
      <S.BackgroundImage />
      <S.Content>
        <Form onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            // type="email"
            placeholder="Insert an e-mail"
            aria-label="email"
            labelColor="white"
            autoFocus
          />
          <Input
            label="Password"
            type="password"
            placeholder="Insert a password"
            aria-label="password"
            labelColor="white"
          />

          <Button type="submit">Enter</Button>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default Login;
