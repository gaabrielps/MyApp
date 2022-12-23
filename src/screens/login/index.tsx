import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from './styles';


export function Login() {
  return (
    <Container>

        <Input />
        <Input />
        <Button  title='Enviar'/>

    </Container>
  );
}