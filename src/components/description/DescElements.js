import styled from "styled-components";

export const DescContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-bottom: 20px;
`;

export const DescContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem;
  z-index: 5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 768px) {
      width: 100vw;
      height: 100vh;
  }
`;

export const DescTitle = styled.h1`
  font-size: clamp(2rem,6vw,3rem);
  letter-spacing: 25px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    letter-spacing: 5px;
  }
`;

export const DescImg = styled.img`
  width: 550px;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
  }
`;

export const DescDescription = styled.p`
  font-size: 15px;
  letter-spacing: 3px;
  color: #fff;

  @media screen and (max-width: 768px) {
      font-size: 13px;
  }
`;