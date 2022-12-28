import React from 'react';
import { Container, Paragraph, Title } from './styles';
import { Button } from '../../components/button';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const {signOut} = useAuth()
  return (
    <Container>
      
        <Title>Home</Title>
        <Button title='sair de aca.so' onPress={signOut}  />
    </Container>

  );
}