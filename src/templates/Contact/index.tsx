import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Form from 'components/Form';
import Heading from 'components/Heading';
import Input from 'components/Input';

import * as S from './styles';

const Contact = () => {
  return (
    <S.Container>
      <S.Content>
        <Form onSubmit={() => console.log('')}>
          <Heading>Level up your brand</Heading>

          <S.SubTitle>
            You can reach us anytime via <span>hi@omnideia.com</span>{' '}
          </S.SubTitle>

          <Input name="name" placeholder="Your name" label="Name" />
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="Your email"
          />
          <Input name="phone" placeholder="(00) 0 0000-0000" label="Phone" />
          <Input
            name="about"
            type="textarea"
            placeholder="Tell us about your project..."
            label="How can we help?"
          />

          <S.ServicesContainer>
            <S.SectionTitle>Services</S.SectionTitle>

            <S.ServicesContent>
              <Checkbox name="Website design" label="Website design" />
              <Checkbox name="UX design" label="UX design" />
              <Checkbox name="User research" label="User research" />

              <Checkbox name="Content creation" label="Content creation" />
              <Checkbox
                name="Strategy and consulting "
                label="Strategy and consulting "
              />
              <Checkbox name="Other" label="Other" />
            </S.ServicesContent>
          </S.ServicesContainer>

          <Button type="submit">Get Started</Button>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default Contact;
