import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

// The card container (Box) with flip effect
const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  perspective: 1000px; /* Added for 3D flip effect */
  margin-right: 10rem; /* Increased margin for more spacing between cards */
  position: relative;
  background-color: transparent;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${Box}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 50px 0 50px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

// Front side of the card
const CardFront = styled(CardFace)`
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 5rem 2rem;
  border: 1px solid ${props => props.theme.body};
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  text-align: center;
  justify-content: center; /* Center content vertically */
  position: relative;
`;

// Title and Description styling
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  margin-top: 0; /* No margin at the top */
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  margin-top: 1rem; /* Space between Title and Description */
`;

// Back side of the card (this will contain the image, Tags, Visit, and GitHub links)
const CardBack = styled(CardFace)`
  background-color: ${props => props.theme.body};
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 5rem 2rem;
  border: 1px solid ${props => props.theme.text};
`;

const Image = styled.img`
  width: 100%;
  height: 80%; /* Increased height for the image placeholder */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-radius: 0 50px 0 50px;
  padding: 10px;
`;

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${CardBack}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
`;

const Link = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: calc(1em + 0.5vw);

  ${CardBack}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${CardBack}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, imageUrl } = props.data;

  return (
    <Box key={id} variants={Item}>
      <CardInner>
        <CardFront>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </CardFront>
        <CardBack>
          <Image src={imageUrl} alt={`${name} preview`} />
          <Tags>
            {tags.map((t, id) => (
              <Tag key={id}>#{t}</Tag>
            ))}
          </Tags>
          <Footer>
            <Link href={demo} target="_blank">
              Visit
            </Link>
            <Git href={github} target="_blank">
              <Github width={30} height={30} />
            </Git>
          </Footer>
        </CardBack>
      </CardInner>
    </Box>
  );
};

export default Card;

