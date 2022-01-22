import { Close } from "@mui/icons-material";
import styled from "styled-components";

export const SearchBoxContainer = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${({ isShow }) => (isShow ? "0" : "-1000px")};
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  transition: 0.3s all;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99;
`;

export const SearchBoxContent = styled.div`
  width: 500px;
  height: 190px;
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBoxHeader = styled.div`
  background-color: #5A5A5A;
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
  width: 500px;
  `;

export const CloseBtn = styled(Close)`
  font-size: 30px !important;
  position: absolute;
  top: 13px;
  left: 10px;
  background-color: red;
  padding: 5px;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 12px;
  text-align: left;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 300px;
`;