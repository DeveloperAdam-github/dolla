import React from 'react';
import Pic from '../../images/1.svg';
import { Button } from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  buttonLabel,
  image,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>
                  Learn a little bit about me...
                </Heading>
                <Subtitle darkText={darkText}>
                  <p>
                    I'm Adam, a 29 year old self-taught web developer, from
                    United Kingdom.
                  </p>
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <p>
                    August 2019 is when I decided I want more from my life, so I
                    began to self teach web development. Started off with the
                    basics HTML, CSS and then started to dive into JavaScript.
                  </p>
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <p>
                    I've taken many online courses in this time and recently
                    I've been working way through learning React, Redux and even
                    playing around with some MERN stack applications. Please
                    take a look at my projects below & if you need to contact me
                    feel free to do so, thanks
                  </p>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={image.default} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
