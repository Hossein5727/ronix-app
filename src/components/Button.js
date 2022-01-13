import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 10px;
  background-color: ${({ primary }) => (primary ? "#ED1C24" : "#FFFFFF")};
  width: 120px;
  color: ${({ primary }) => (primary ? "#FFFFFF" : "#ED1C24")};
  border-radius:3px;
  position: relative;
  transition: 0.3s all;
  border: none;
  outline: none;
  margin-top: 20px;
  z-index: 99;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background:${({ primary }) => (primary ? "#FFFFFF" : "#ED1C24")};
    z-index:1;
    transition: transform 0.3s;
    opacity: 0.3;
}
&:hover::before {
      transform: scaleY(1);
}

`;