import styled from 'styled-components';

export const Container = styled.div<{ isselected: boolean }>`
  display: flex;
  border: 2px solid  ${({ isselected }) => (isselected ? '#BA181B' : '#1C1719')};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
      border: 2px solid #8c0c10;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #660708;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #B8B8D4;
`;
