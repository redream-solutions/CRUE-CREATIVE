import styled from 'styled-components';
import "./banner.css";
import ban01 from '../../assets/img/pod01.png';
import ban02 from '../../assets/img/pod02.png';
import ban03 from '../../assets/img/pod03.png';
import ban04 from '../../assets/img/pod04.png';
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:black;
  z-index: 12;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 2rem clamp(0.5rem, 2vw, 1rem);
  box-sizing: border-box;
  @media (max-width: 768px) {
    gap: 24px;
    padding: 1.5rem 0.75rem;
  }
`;

const BannerComponent = styled.p`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Lora', serif;

  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    white-space: normal;
    font-size: clamp(1rem, 4vw, 2rem);
  }
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <SectionWrapper>
      <Container id="up">
        <BannerComponent>
          <img src={ban01} alt="" className="ban-pic"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban02} alt="" className="ban-pic"
             data-scroll
             data-scroll-direction="horizontal"
             data-scroll-speed="-6"
             data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban03} alt="" className="ban-pic"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
        <BannerComponent>
        <img src={ban04} alt="" className="ban-pic"
           data-scroll
           data-scroll-direction="horizontal"
           data-scroll-speed="-4"
           data-scroll-target="#up"
          >
          </img>
        </BannerComponent>
      </Container>
    </SectionWrapper>
  );
};

export default Banner;
