import styled from 'styled-components';
import CoverVideo from '../CoverVideo';
import Logo from '../Logo';

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow: hidden;
`;

const Home = () => {
  return (
    <SectionWrapper id="home">
      <CoverVideo />
      <Logo />
    </SectionWrapper>
  );
};

export default Home;
