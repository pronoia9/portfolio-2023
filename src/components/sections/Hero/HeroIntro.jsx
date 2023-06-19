import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { keyframes, styled } from 'styled-components';

import { Socials } from '../..';
import { UnfilledButton } from '../../../styles/ButtonStyles';
import { Description, SubtitleWithAccent, SubtitleWithHandwriting, HeroTitle } from '../../../styles/TextStyles';
import { heroData } from '../../../utils/data';

export default function HeroIntro() {
  const { name, occupation, introductions } = heroData;
  const introRef = useRef(), cursorRef = useRef();

  useEffect(() => {
    const typed = new Typed(introRef.current, {
      strings: introductions,
      typeSpeed: 25,
      backSpeed: 10,
      startDelay: 2500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });
    return () => { typed.destroy(); };
  }, []);

  return (
    <Container className='content scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      {/* Title */}
      <Titles className='titles'>
        <SubtitleWithAccent><p>Hello, <span>my name is</span></p></SubtitleWithAccent>
        <HeroTitle><span>{name.split(' ')[0]}</span> {name.split(' ')[1]}</HeroTitle>
        <SubtitleWithHandwriting>I am a <span>{occupation}</span></SubtitleWithHandwriting>
      </Titles>

      {/* Description */}
      <DescriptionContainer className='description'>
        <p><span ref={introRef}>{introductions[0]}</span><span ref={cursorRef}>|</span></p>
        <Socials />
      </DescriptionContainer>

      {/* Download Button */}
      <UnfilledButton className='bts'>
        <a href={heroData.resumeLink} target='_blank' className='btn'><span>Download CV</span></a>
        <a href='#skills' className='btn-link'>My Skills</a>
      </UnfilledButton>
    </Container>
  );
}

const blink = keyframes`
  0%   { opacity: 1; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.div`
  padding-top: 40px;
  position: relative;

  @media screen and (min-width: 1700px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 140px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
		padding-top: 120px;
  }
`;

const Titles = styled.div`
  max-width: 640px;
  /* z-index: 3; */

  @media screen and (max-width: 1024px) {
    margin-bottom: 760px;
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 420px;
    min-height: 160px;
  }
`;

const DescriptionContainer = styled(Description)`
  padding: 40px 0;
  max-width: 520px;

  & > :first-child {
    /* font-family: var(--f-code);
    min-height: 91.78px; */
    min-height: 61.188px;

    span:last-child {
      color: var(--c-accent);
      font-weight: 900;
      animation: ${blink} 1s steps(1, start) 1s infinite both;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 40px !important;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;