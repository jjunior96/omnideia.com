import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight as ArrowRightIcon } from 'react-icons/bs';

import Button from 'components/Button';
import Container from 'components/Container';
import Header from 'components/Header';
import Heading from 'components/Heading';
import SectionInfo from 'components/SectionInfo';

import InfoMock from './mock';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />

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
            <Image src="/img/image-people.png" width="1000" height="1000" />
          </S.SectionImage>
        </S.SectionContainer>

        <SectionInfo info={InfoMock} />
      </Container>
    </S.Container>
  );
};

export default Home;
