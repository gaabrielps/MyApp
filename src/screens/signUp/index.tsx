import React from 'react';


import { Container, Text } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';

export function SignUp() {
  return (
    <Container>

        <Text>Cadastro</Text>
        <Input placeholder='Email'/>
          
        <Input placeholder='Nome' />

        <Input placeholder='Ultimo nome'/>

        <Input placeholder='Senha'/>

        <Input placeholder='Confirme a senha'/>

   
      <Button title='Criar conta em aca.so'/>

      <Button title='voltar ao login'/>


  


    </Container>
  );
}