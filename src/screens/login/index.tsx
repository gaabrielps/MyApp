import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from './styles';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';
import { Title } from '../signUp/styles';



export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signup')
  }

  return (
    <Container>
        <Title>Login</Title>
        
        <Input placeholder='Email' />
        <Input placeholder='Password' secureTextEntry/>
        <Button  
        title='Enviar' disabled={true}/>
        <Button  title='Cadastrar' onPress={handleNewAccount}/>

    </Container>
  );
}