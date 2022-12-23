import React from 'react';
import {useNavigation} from '@react-navigation/native'

import { Container, Text } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';




export function SignUp() {
  const navigation = useNavigation() 

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container>

        <Text>Cadastro</Text>
        <Input placeholder='Email'/>
          
        <Input placeholder='Nome' />

        <Input placeholder='Ultimo nome'/>

        <Input placeholder='Senha'/>

        <Input placeholder='Confirme a senha'/>

   
      <Button title='Criar conta em aca.so'/>

      <Button title='voltar ao login' onPress={handleGoBack}/>


  


    </Container>
  );
}