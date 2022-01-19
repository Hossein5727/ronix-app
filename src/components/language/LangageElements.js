import { Close } from "@mui/icons-material";
import styled from "styled-components";

export const LanguageContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${({ isShow }) => (isShow ? "0" : "1000px")};
  display: flex;
  justify-content: center;
  align-items: center;
 background-color: rgba(0,0,0,0.5);
 z-index:${({ isShow }) => (isShow ? "10" : "0")} ;
 color: #000;
 opacity: ${({ isShow }) => (isShow ? "1" : "0")};
 transition: 0.3s all;
`;

export const LanguageContent = styled.div`
  width: 650px;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 5px;
  position: relative;
  margin-top: 40px;
  height: 400px;
  overflow-y:scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`;

export const ClosIcon = styled(Close)`
  font-size: 35px !important;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  z-index: 10;
`;

export const Languages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 20px;
`;

export const LanguageBox = styled.div`
  width: 130px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #d4d4d4;
  padding: 12px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;

  & h1{
      font-size: 21px;
      font-weight: 600;
      margin-top: 4px;
  }
`;

export const LanguageCountryImg = styled.img`
  width: 110px;
  height: 70px !important;
  object-fit: cover;
  border-radius: 5px;
`;

