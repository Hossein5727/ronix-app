import styled from 'styled-components';
import { Close } from "@mui/icons-material";


export const DropDownConatainer = styled.section`
  position: absolute;
  right: ${({ showDrop }) => (showDrop ? "0" : "-1000px")};
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: #f8fafc;
  color: #000;
  z-index: ${({ showDrop }) => (showDrop ? "120" : "0")};
  transition: all 0.6s ease-in-out !important;
`;

export const DropDownContent = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  margin: 25px;
`;

export const Link = styled.h1`
  font-size: 24px;
`;

export const Icon = styled.div`

`;

export const CloseBtn = styled(Close)`
  position: absolute;
  top: 35px;
  right: 35px;
  font-size: 35px !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;