import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroSectionElements';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      {/* <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>Hello there!</HeroH1>
        <HeroP>
          I'm <span style={{ color: '#02bf71' }}>DeveloperAdam 🚀</span>
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
