import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #B8B8D4;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #1C1719;
    margin: 30px 0;
  }

  label {
    font-size: 13px;
    display: block;
    

    input {
        display: block;
        margin-top: 7px;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 10px;
        border: 2px solid #660708;
        border-radius: 10px;
        color: #FFF;
        outline: 0;
        font-size: 15px;
        background-color: #0b090a;
    }
  }

  label:not(:last-child) {
    margin-bottom: 20px;
  }


  button {
    background-color: #660708;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
      background-color: #8c0c10;
    }
  }
  
`;

