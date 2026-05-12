import styled from 'styled-components'; 
import "./new.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  position: relative;
  background-color: #000000;
  display: flex;
  margin: 0 auto;
  color: white;
  font-family: 'Albert Sans', sans-serif;
  padding: 0 clamp(0.75rem, 3vw, 2rem);
  box-sizing: border-box;
  overflow-x: hidden;
  @media (max-width: 768px) {
    min-height: auto;
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  z-index: 10;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    padding-bottom: 2.5rem;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(0.95rem, 2.5vw, 1.5em);
  position: absolute;
  text-transform: uppercase;
  z-index: 10;
  padding: 0 0.5rem;
  box-sizing: border-box;
  max-width: min(48rem, 100%);
  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    padding: 2.5rem 0 1rem;
    order: 1;
  }
`;

const Home = () => {
  return (
    <SectionWrapper id="cta-scroll" className="about cta-section">
      

      <LeftContainer
        data-scroll
        data-scroll-sticky
        data-croll-direction="#cta-scroll"
      >
     <p className="end-tezxt"
        data-scroll data-scroll-speed="-2">
          CreateX is a digital agency based in London <br />
          our aim is to win awwwards as being part of its community <br />
          Not just awwwards to, we won't to provide our customers with <br />
          the best digital experience they could ever imagine of.
      </p> 
      </LeftContainer>
       
      <TextWrapper >
        <p className="header-sl-new"
        data-scroll data-scroll-speed="-2">WORK WITH US</p> 
      </TextWrapper>
    </SectionWrapper>
  );
};

export default Home;
