import styled from "styled-components";
import LanguageIcon from '@mui/icons-material/Language';
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  height: 90px;
  background-color: #FFFFFF;
  color: #000;
  position: fixed;
  z-index: 20;
  -webkit-box-shadow: 0px 19px 21px -8px rgba(255,255,255,0.57); 
  box-shadow: 0px 19px 21px -8px rgba(255,255,255,0.57);
  /* border-bottom: 1px solid #000; */


  @media screen and (max-width: 768px) {
  background-color: transparent;
  color: #fff;
  position: relative;
  z-index: 5;
  }
`;

export const NavContent = styled.div`
   display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeftColumn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
`;

export const NavLanguage = styled(LanguageIcon)`
  font-size: 28px !important;
  transform: translate(-35px,5px);
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: #000;
`;

export const NavRightColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  cursor: pointer;
  
  & p{
      font-size: 17px;
      font-weight: 600;
  }

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavIcon = styled.div`
  font-size: 28px !important;
`;


export const NavLogoBox = styled(Link)`
  margin-left: 30px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;
  overflow-y: hidden;
  
  :hover{
      transform: translateY(-4px);
  }
`;

export const NavLogoImg = styled.img`
  object-fit: contain;
`;