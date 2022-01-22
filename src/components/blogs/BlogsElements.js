import styled from 'styled-components';
import img from '../../assets/images/blog4.jpg';

export const BlogsContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BLogsContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 5px;
  gap: 15px;
  
  
  @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
    `;

export const BLogsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-shrink: 10;
  `;

export const Title = styled.h1`
  font-size: clamp(3rem,6vw,1rem);
  font-weight: 700;
  color: #ED1C24;
  margin-bottom: 10px;
  `;

export const Desc = styled.p`
  line-height: 35px;
  `;

export const ImageContainer = styled.div`
  /* padding: 5px; */
`;