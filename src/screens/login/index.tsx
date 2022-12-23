import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from './styles';

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';
import { Text } from '../signUp/styles';



export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signup')
  }

  return (
    <Container>
        <Text>Login</Text>
        <Input placeholder='Email' />
        <Input placeholder='Password'/>
        <Button  title='Enviar'/>
        <Button  title='Cadastrar' onPress={handleNewAccount}/>

    </Container>
  );
}