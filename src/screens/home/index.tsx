import React from 'react';
import { Container, Paragraph, Title } from './styles';
import {Text} from 'react-native'
import { Button } from '../../components/button';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const {signOut} = useAuth()
  return (
    <Container>
        <Title>João</Title>
        <Text>carlos</Text>
        <Paragraph>Online sempre</Paragraph>
        <Button title='sair de aca.so' onPress={signOut}  />

    </Container>

  );
}