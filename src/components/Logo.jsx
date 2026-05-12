import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Container = styled.div`
`;

const TextWrapper = styled(motion.span)`

.bar-nav{
  position:absolute;
  z-index:99;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 20px;
  position: fixed;
  left: 5px;
  right: 5px;
  top: 10px;
  width: auto;
  max-width: calc(100% - 10px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0;
  row-gap: 0.25rem;
  box-sizing: border-box;
}

li {
  flex: 0 0 auto;
  position: relative;
}
li a:hover{
  color: rgb(187, 161, 122);

}
li a {
  font-family: 'Albert Sans', sans-serif;
  display: block;
  color: #000000;
  text-align: center;
  padding: 12px clamp(8px, 2vw, 16px);
  text-decoration: none;
  font-size: clamp(0.8rem, 2.8vw, 1rem);
}
li a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

li a:hover:after{

  transform: scaleX(1);
  transform-origin: bottom left;
}



.logo-av{
  position: absolute;
  top: 4px;
  left: 12px;
  font-family: domaine;
  font-size: clamp(1.1rem, 4.5vw, 2.2rem);
  color: #000000;
  line-height: 1;
  letter-spacing: 0.02em;
}

@media (max-width: 520px) {
  ul {
    padding-top: 2.5rem;
    justify-content: center;
  }
  .logo-av {
    left: 50%;
    transform: translateX(-50%);
    top: 8px;
  }
  li {
    flex: 1 1 auto;
    min-width: 22%;
  }
  li a {
    padding: 10px 8px;
  }
}

`;

const textVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    x: -5,
    transition: {
      duration: 1,
      delay: 2,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
         
        <TextWrapper
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
      <div className='bar-nav'>
        <ul>
         <span className="logo-av">CreateX</span>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">News</a></li>
        <li><a className="active" href="#">Home</a></li>
          
          
          
        </ul>
      </div>

        </TextWrapper>
      </Link>
    </Container>
  );
};

export default Logo;
