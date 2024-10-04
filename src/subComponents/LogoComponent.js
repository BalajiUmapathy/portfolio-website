import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Logo = styled.h1`
    display: inline-block;
    color: ${props => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
    cursor: pointer; // Change cursor to pointer for better UX
`;

const LogoComponent = (props) => {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Wrap Logo with Link to redirect to home page */}
            <Logo color={props.theme}>
                UB
            </Logo>
        </Link>
    );
}

export default LogoComponent;
