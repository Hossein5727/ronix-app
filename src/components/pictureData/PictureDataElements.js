import styled from "styled-components";
import img from '../../assets/images/pictureData.jpg'

export const PictureContainer = styled.section`
  width: 100%;
  height: 400px;
  background: url(${img}) no-repeat center center fixed;
  display: table;
  position: relative;
  background-size: cover;

  &::before{
      content: '';
      position: absolute;
      inset: 0;
      z-index: 10;
      background:linear-gradient(
          0deg,
          rgba(0, 0, 0 ,0.2)0%,
          rgba(0, 0, 0, 0.2)10%,
          rgba(0, 0, 0, 0.6)70%
      );
  }
`;