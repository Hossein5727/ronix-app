import styled from "styled-components";

export const ToolsContainer = styled.section`
  width: 100vw;
  background-color: #FFFFFF;
  padding: 1.5rem 2rem;
`;

export const ToolsContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      flex-flow: column-reverse;
  }
`;

export const ToolsLeftColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  width: 100vw;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 40px 0;
  padding: 0.5rem;
  }
`;

export const ToolsRightColumn = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 100%;
& h1{
      font-size: clamp(3rem,6vw,2.5rem);
      color: #000;
      margin-bottom: 7px;
      font-weight: 600;
      width: 100%;
  };

  & h2{
      margin-bottom: 15px;
      font-size: clamp(1rem,6vw,2rem);
      color: red;
      font-weight: 600;
  };

  & p{
      font-size: clamp(0.5rem,6vw,1rem);
      color: #000;
      font-weight: 500;
      line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    & h1{
      text-align: center;
      letter-spacing: 4px;
  };

  & h2{
    text-align: center;
    letter-spacing: 3px;
  };
  }
`;

export const ToolBox = styled.div`
  position: relative;
  cursor: pointer;
  width: 150px;
  height: 150px;
  padding: 0.5rem;
  background-color: #64748b;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s all !important;
  
  &::before {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background: #dc2626;
    z-index:1;
    transition: transform 0.3s;
}
&:hover::before {
      transform: scaleY(1);
  }

  & img{
      width: 100px;
      z-index: 3 !important;
      object-fit: cover;
  };

  & h1{
      font-size: 20px;
      font-weight: 600;
      z-index: 3 !important;
      color: #ffffff;
  };

  
  @media screen and (max-width: 768px) {
      width: 160px;
      height: 130px;
      margin: 4px;

      & img{
      width: 80px;
      object-fit: cover;
  };

  & h1{
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
  }
  }
`;
