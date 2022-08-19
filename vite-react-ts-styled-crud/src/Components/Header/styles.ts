import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: 3em;
  padding: 1.5em;
  will-change: filter;

  :hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

export const Text = styled.h1`
  font-size: 3em;
  line-height: 1.1;
`;