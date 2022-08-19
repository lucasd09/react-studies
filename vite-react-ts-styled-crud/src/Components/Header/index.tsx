import React from 'react';
import reactLogo from '../../assets/react.svg'

import { Container, Img, Text } from './styles';

const Header: React.FC = () => {
  return <Container>
        <Img src="/vite.svg" alt="Vite logo" />
        <Img src={reactLogo} alt="React logo" />
        <Text>Vite + React TS + Styled Components - CRUD</Text>
  </Container>;
}

export default Header;