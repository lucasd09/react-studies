import styled from 'styled-components';

export const Input = styled.input`
  width: 400px;
  height: 38px;
  padding: 4px 10px 4px 10px;
  border: 1px solid #333;
  border-radius: 2px;
  background: none;
  margin-bottom: 20px;
  box-sizing: border-box;  
  transition: border-color 0.15s;

  :focus {
    box-shadow: 0 0 0 0;
    border: 2px solid #dc0000;
    outline: 0;
  }
`;

export default Input;