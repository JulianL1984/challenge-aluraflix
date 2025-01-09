import React from 'react'
import styled, { css } from "styled-components"


const FooterContainer = styled.div`
    background-color:rgb(10, 10, 10);
    font-size: 20px;
    color: white;
    height: 10vh;
    display:flex;
    align-items: top;
    justify-content:center;
    min-width:320px;
    border-top: 2px solid #2A7AE4;
    padding-top: 1rem;
   
    
`

const Logo = styled.img`
    height:3rem;
    margin-left:2%;
    
    ${props => css`
    @media (max-width: ${props.theme.breakpoints.laptop}) {
      margin: 0 auto;
      
   ` }

   
`


function Footer() { 
  return (
    <FooterContainer>
      <>© 2025 - Julian Labastidas</> 
    </FooterContainer>
  );
}


export default Footer