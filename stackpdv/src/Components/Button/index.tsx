import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : '#dc0000')};
  color: ${(props) => (props.outlined ? '#333' : '#fff')};
  border: 1px solid #dc0000;


  border-radius: 5px;

  font-size: 1em;
  font-weight: 500;
  transition: border-color 0.25s;
  width: fit-content;
  height: fit-content;
  padding: 0.6em 1.4em;

  cursor: pointer;
  outline: 0;
`;
