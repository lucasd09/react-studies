import styled from 'styled-components';

const bg = 'rgba( 217, 217, 217, 0.25 )';

export const Container = styled.div`
  width: fit-content;
  height: 38px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background: ${bg};
  border: 1px solid rgba(0,0,0,0.35);
`;

export const SearchIcon = styled.img`
  padding: 14px;
  width: 18px;
  height: 18px;
  border: 0 none;
`;

export const Input = styled.input`
  background: none;
  font-size: 16px;
  border: none;
  margin-right: 16px;

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;