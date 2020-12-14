import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterInside,
  FooterInsideEmail,
} from './FooterElements';
import { Link } from 'react-router-dom';
import logo from '../../images/websiteLogo.svg';

const Footer = () => {
  const backToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <h1>Contact me</h1>
            <FooterInside>
              If you want to get in touch, you can email me at:
            </FooterInside>
            <a
              style={{ textDecoration: 'none', color: '#fff' }}
              href='mailto:thedeveloperadam@gmail.com'
            >
              <FooterInsideEmail>thedeveloperadam@gmail.com</FooterInsideEmail>
            </a>
            <p
              style={{
                marginTop: '36px',
                color: '#fff',
                textTransform: 'none',
              }}
            >
              OR fill in the contact
              <Link to='/signin' style={{ textDecoration: 'none' }}>
                <span style={{ color: '#02bf71', fontWeight: '800' }}>
                  {' '}
                  FORM
                </span>
              </Link>
            </p>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={backToTop}>
              <img src={logo} alt='' style={{ width: '160px' }} />
            </SocialLogo>
            <WebsiteRights>
              {' '}
              DeveloperAdam &copy; {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                style={{ color: '#02bf71' }}
                href='//www.facebook.com/DeveloperAdam1'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com/developeradam/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                style={{ color: '#02bf71' }}
                href='//www.twitter.com/DeveloperAdam_'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
