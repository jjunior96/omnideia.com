import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight as ArrowRightIcon } from 'react-icons/bs';

import Base from 'templates/Base';

import Button from 'components/Button';
import Container from 'components/Container';
import Heading from 'components/Heading';
import SectionInfo from 'components/SectionInfo';

import InfoMock from './mock';
import * as S from './styles';

const Home = () => {
  return (
    <Base>
      <Container>
        <S.SectionContainer>
          <S.SectionInfo>
            <Heading size="huge">A digital Product design agency</Heading>

            <Link href="/services" passHref>
              <Button as="a" icon={<ArrowRightIcon />} positionIcon="right">
                Our Services
              </Button>
            </Link>
          </S.SectionInfo>

          <S.SectionImage>
            <Image
              src="/img/image-people.png"
              layout="fill"
              alt="People together"
              objectFit="cover"
            />
          </S.SectionImage>
        </S.SectionContainer>

        <SectionInfo info={InfoMock} />
      </Container>
    </Base>
  );
};

export default Home;
