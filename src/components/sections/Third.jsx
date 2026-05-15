import styled from 'styled-components';
import './new.css';

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
  align-items: center;
  @media (max-width: 900px) {
    min-height: auto;
    align-items: stretch;
  }
`;

const CtaInner = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, min(28rem, 44vw));
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
  padding: clamp(2rem, 6vh, 5rem) 0;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 0 3rem;
    gap: 2rem;
  }
`;

const HeadingBlock = styled.div`
  min-width: 0;
  @media (max-width: 900px) {
    order: 2;
  }
`;

const CopyBlock = styled.div`
  min-width: 0;
  justify-self: end;
  align-self: center;
  width: 100%;
  max-width: 100%;
  @media (max-width: 900px) {
    order: 1;
    justify-self: stretch;
  }
`;

const Home = () => {
  return (
    <SectionWrapper id="cta-scroll" className="about cta-section">
      <CtaInner>
        <HeadingBlock>
          <p
            className="header-sl-new"
            data-scroll
            data-scroll-speed="-2"
          >
            WORK WITH US
          </p>
        </HeadingBlock>
        <CopyBlock
          data-scroll
          data-scroll-sticky
          data-croll-direction="#cta-scroll"
        >
          <p className="end-tezxt" data-scroll data-scroll-speed="-2">
            CreateX is a digital agency based in London <br />
            our aim is to win awwwards as being part of its community <br />
            Not just awwwards to, we won&apos;t to provide our customers with{' '}
            <br />
            the best digital experience they could ever imagine of.
          </p>
        </CopyBlock>
      </CtaInner>
    </SectionWrapper>
  );
};

export default Home;
