import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';
import Me from '../assets/Images/profile-img.png';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
 display: flex;
  justify-content: center;

`;

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

const MeImage = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 30vw; /* Increased width for a larger image */
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1.7rem;
  width: 55vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 1vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />

        <MeImage>
          <img className="pic" src={Me} alt="Profile Pic" />
        </MeImage>

        <Main>
          I’m a Pre-Final Year student at RIT and an emerging front-end developer passionate about building modern, scalable web solutions. My journey in web development is driven by a desire to create impactful and user-friendly websites.
          <br /><br />
          I have developed a solid foundation in HTML, CSS, and Tailwind CSS, which I further enhanced with JavaScript and jQuery. Recently, I've been diving into the React framework and exploring the advanced features of Next.js, particularly its Server-Side Rendering and API Routes capabilities.
          <br /><br />
          I believe that creativity and attention to detail are essential for crafting exceptional user experiences.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
