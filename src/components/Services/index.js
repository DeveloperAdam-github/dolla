import React from 'react';
import Icon1 from '../../images/5.svg';
import Icon2 from '../../images/6.svg';
import Icon3 from '../../images/7.svg';
import Icon4 from '../../images/screenshot.png';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='portfolio'>
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://peaceful-falls-30555.herokuapp.com/homepage'
          >
            <ServicesIcon src={Icon4} />
          </a>
          <ServicesH2>Workout Tracker</ServicesH2>
          <ServicesP>
            A MERN application where you can log your workouts, or adjust
            percentages
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>N/A</ServicesH2>
          <ServicesP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, impedit!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>N/A</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            temporibus.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
