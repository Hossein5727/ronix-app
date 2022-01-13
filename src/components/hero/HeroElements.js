import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const HeroContainer = styled.section`
  width: 100vw;
  height: 85.6vh;
  position: relative;
  overflow-x: hidden;
  background-color: #fff !important;

  @media screen and (max-width: 768px) {
  margin-top: -90px;
  height: 100vh;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &::before{
      content: '';
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      bottom: 0vh;
      overflow: hidden;
      opacity: 1;
      background:linear-gradient(
          0deg,
          rgba(0, 0, 0 ,0.2)0%,
          rgba(0, 0, 0, 0.2)20%,
          rgba(0, 0, 0, 0.6)100%
      );
  }
`;

export const HeroBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const HeroBoxImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

export const NextSlide = styled(ArrowForwardIosIcon)`
  font-size: 70px !important;
  position: absolute;
  top: 50%;
  right: 30px;
  z-index: 5;
  color: #ffff;
  cursor: pointer;

  @media screen and (max-width:768px) {
      font-size: 40px !important;
  }
`;

export const PrevSlide = styled(ArrowBackIosNewIcon)`
  font-size: 70px !important;
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 5;
  color: #ffff;
  cursor: pointer;

  @media screen and (max-width:768px) {
      font-size: 40px !important;
  }
`;

export const HeroBgContent = styled.img`
  position: absolute;
  top: 12%;
  left:22%;
  width: 750px;
  height: 350px;
  object-fit: cover;
  z-index: 5;
  box-shadow: 1px 1px 90px #fff;
  border-radius: 10px;
  transition: 0.4s all !important;
  cursor: pointer;
  
  @media screen and (max-width: 1190px) {
      display: none;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 70px;
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 32%;
  color: #fff;
  text-shadow: 2px 2px 16px #1d4ed8;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;