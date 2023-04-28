import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components'
import { useState } from 'react';
import { sliderItems } from '../Redux/data';
import model1 from '../Assets/model1.png'



const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;

`;

const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top : 0;
   bottom : 0;
   left: ${(props) => props.direction === "left" && "10px"};
   right: ${(props) => props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

const Wrapper = styled.div`
   height:100%;
   display: flex;
   transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
   width : 100vw;
   height : 100%;
   display : flex;
   align-items : center;
`;

const ImgContainer = styled.div`
   height: 50%;
   width:50;
   flex: 1;
`;

const Img = styled.img`
   height: 60%;
   width: 40%;
   padding-left:20px
`;

const InfoContainer = styled.div`
   height: 60%;
   flex: 1;
   align-items : center;
   padding: 80px;
   margin-top: -180px;
`;

const Title = styled.h1` 
   font-size: 70px;
`;
const Desc = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;

`;
const Button = styled.button`
   padding: 10px;
   font-size: 20px;
   font-weight: 500;
   cursor: pointer;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

    return (
        <Container>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
              <Slide bg={item.bg} key={item.id}>
                {/* <ImgContainer>
                  <Img src={item.img} alt="Model" />
                </ImgContainer> */}
                <InfoContainer style={{ backgroundImage: `url(${item.img})`, backgroundSize:`Cover` }}>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            ))}
          </Wrapper>
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </Arrow>
        </Container>
      );
    };
    
    export default Slider;
    