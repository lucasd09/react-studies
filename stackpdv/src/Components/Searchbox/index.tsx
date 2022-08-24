import { FC, HTMLProps } from 'react';

import img from '../../Assets/pesquisar.png'

import { Container, Input, SearchIcon } from './styles';

const Searchbox: FC<HTMLProps<HTMLInputElement>> = ({placeholder}) => {
  return <Container>
    <SearchIcon src={img}/>
    <Input placeholder={placeholder}/>
  </Container>;
}

export default Searchbox;
