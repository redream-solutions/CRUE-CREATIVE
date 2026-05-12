import React from 'react';
import styled from 'styled-components'; 
import "./foot.css";
const SectionWrapper = styled.section`
  min-height: 90vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: whitesmoke;
  position: relative;
  padding: 2rem clamp(0.75rem, 3vw, 2rem);
  box-sizing: border-box;
  overflow-x: hidden;
`;
const LogoContainer = styled.div`
  font-family: domaine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: min(10vw, 120px);
    height: auto;
    max-width: 100%;
  }
  h3 {
    font-family: domaine;
    font-size: clamp(1.75rem, 6vw, 3em);
    text-align: center;
  }
`;
 const Bottom = styled.div`
 font-family: domaine;
 color: white;
 font-size:1em;
 width: 100%;
 max-width: 100%;
 position: relative;
 min-height: 4rem;
 @media (max-width: 640px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   text-align: center;
 }
`;

const Footer = () => {
  return (
    <SectionWrapper>
      <LogoContainer>
        
        <h3 data-scroll data-scroll-speed="-1">
          CreateX
        </h3>
      </LogoContainer>
      
        <Bottom>
          <span className="credit"
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved 2022
          </span> 
          <span className="link-ig"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Crafted by re'Dream
          </span>
        </Bottom> 
    </SectionWrapper>
  );
};

export default Footer;
