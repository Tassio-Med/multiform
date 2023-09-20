import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B8B8D4;
  }
  h1 {
    font-size: 26px;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const Box = styled.div`
  /* flex: 1; */
  padding: 0 4px;
  margin-bottom: 3px;
  margin-right: 5px;
  width: 100%;

  h5{
    margin-bottom: 6px;
  }
`;
  
export const Data = styled.div`
  background-color: #161A1D;
  padding: 5px 10px;
  border-radius: 5px;

  p {
    font-size: 15px ;
  }
`;

export const Dev = styled.div`
  display: flex;
`;

export const BackButton = styled(Link)`
  margin-top: 30px;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #B8B8D4;
  width: 10%;

  &:hover {
    color: #fff;
  }
`;

