import Link from 'next/link';

import MenuData from 'components/Header/data';
import Heading from 'components/Heading';

import * as S from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <S.Container>
    <S.Content>
      <S.Column>
        <Heading color="white" size="small">
          Contact Us
        </Heading>

        <a href="mailto:sac@omnideia.com">sac@omnideia.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="white" size="small">
          Follow us
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/omnideia"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/omnideia"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/omnideia"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/omnideia"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="white" size="small">
          Links
        </Heading>

        <nav id="resources">
          {MenuData.map((menu) => (
            <Link key={menu.id} href={menu.path}>
              <a>{menu.name}</a>
            </Link>
          ))}
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="white" size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Omnideia {currentYear} © All rights reserved.</S.Copyright>
  </S.Container>
);

export default Footer;
