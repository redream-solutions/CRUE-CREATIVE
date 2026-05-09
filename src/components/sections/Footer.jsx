import React from 'react';
import styled from 'styled-components'; 
import "./foot.css";
const SectionWrapper = styled.section`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black; 
  color:whitesmoke

  position: relative;
`;
const LogoContainer = styled.div`
  font-family: domaine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-family: domaine;
    font-size: 3em;
  }
`;
 const Bottom = styled.div`
 font-family: domaine;
 color: white;
 font-size:1em;
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
