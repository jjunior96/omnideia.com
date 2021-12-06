import Link from 'next/link';
import { FaLongArrowAltRight as ArrowUpRightIcon } from 'react-icons/fa';

import Base from 'templates/Base';

import Button from 'components/Button';
import Container from 'components/Container/';
import Heading from 'components/Heading';

import * as S from './styles';

const About = () => {
  return (
    <Base>
      <Container>
        <S.Content>
          <Heading>About 10 projects</Heading>

          <S.ImageContainer
            src="/img/about.jpeg"
            alt="People work together"
            role="img"
          />

          <S.DescriptionContainer>
            <S.AboutTitle>About Omnideia</S.AboutTitle>

            <S.TitleDescription>
              We can build new digital products from the ground up, or upgrade
              existing ones to cope with new demands and growing user base.
            </S.TitleDescription>

            <S.AboutDescription>
              Studio is a team of multidisciplinary digital product experts who
              can take on any challenge in the sphere of web and mobile app
              development. We create digital experiences that are human-centered
              and future proof.
            </S.AboutDescription>
          </S.DescriptionContainer>

          <S.CallToContact>
            <S.TitleContact>
              Have a project in mind? <br />
              Lets get to <span>work</span>.
            </S.TitleContact>

            <Link href="/contact">
              <Button
                as="a"
                icon={<ArrowUpRightIcon color="#5855E9" size={16} />}
                positionIcon="right"
              >
                Contact
              </Button>
            </Link>
          </S.CallToContact>
        </S.Content>
      </Container>
    </Base>
  );
};

export default About;
