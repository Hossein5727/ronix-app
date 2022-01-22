import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 350px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0) 75%, rgba(255,255,255,0.7903536414565826) 160%);
  position: relative;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center; 
      align-items: center;
  }
`;

export const FooterList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 50px;

  @media screen and (max-width: 768px) {
  gap: 45px;
  flex-direction: row;
  margin-bottom: 15px;
  }
`;

export const FooteLinkItem = styled.p`
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  margin: 0 5px;
`;

export const FooterListIcons = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;

export const FooterIcon = styled.div`
  color: #ffffff;
  cursor: pointer;
  width: 18px;
  height: 18px;

  &:hover{
      color: #1d4ed8;
  }
`;