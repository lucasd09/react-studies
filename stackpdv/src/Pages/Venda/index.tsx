import React, { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { Title } from '../../Components/Text';
import { Link } from 'react-router-dom';

import { ButtonGroup, Container, VendaContainer, VendaForm } from './styles';

type list = {
  product: string | undefined;
  price: number | undefined;
}

const Venda: React.FC = () => {
  const [product, setProduct] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [list, setList] = useState<list[]>([]);

  async function vender() {
    const obj = {
      product: product,
      price: price
    }

    setList([...list, obj])
  }
  
  return <Container>
    <VendaForm>
      <Input placeholder='Produto' 
             value={product} 
             onChange={(e) => setProduct(e.target.value)}/>

      <Input  placeholder='Preço' 
              value={price} 
              onChange={(e) => 
              setPrice(parseFloat(e.target.value))}/>
      <ButtonGroup>
        <Button onClick={vender}>Cadastrar</Button>
        <Link to='/'><Button outlined>Voltar</Button></Link>
      </ButtonGroup>
      
    </VendaForm>
    <VendaContainer>
      <Title>Vendas</Title>
      {list.map((x) => {
        return(
          <>
            <p>{x.product}</p>
            <p>{x.price}</p>
          </>
        )
      })}
    </VendaContainer>
  </Container>;
}

export default Venda;