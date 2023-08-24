import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0b090a;
  color: #ffffff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Sidebar = styled.div`
  border-right: 1px solid #ba181b;
  width: 100vh;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Page = styled.div`
    border: 1px solid #ba181b;
    border-radius: 5px;
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;