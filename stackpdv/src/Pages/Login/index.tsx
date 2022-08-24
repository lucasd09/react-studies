import React from 'react';

import Button from '../../Components/Button' 
import Input from '../../Components/Input';
import { Container,
   Left, 
   ButtonGroup,
   Right } from './styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return <Container>
    <Left/>
    <Right>
        <Input placeholder='email' type='email'/>
        <Input placeholder='senha' type='password'/>
        <ButtonGroup>
          
          <Link to='/venda'><Button>Login</Button></Link>
        </ButtonGroup>
    </Right>
  </Container>;
}

export default Login;