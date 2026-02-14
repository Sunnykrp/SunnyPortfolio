import styled from 'styled-components';

export const Div = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 640px) {
    width: 150px;
    height: 150px;
  }
`;