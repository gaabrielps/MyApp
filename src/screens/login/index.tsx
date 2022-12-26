import React from 'react';
import {useNavigation} from '@react-navigation/native'

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from './styles';
import { Title } from '../signUp/styles';

import {useForm, Controller} from 'react-hook-form'

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { api } from '../../services/api';
import axios from 'axios';




type formData = {
  email: string;
  password: string;
}

export function Login() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {control, handleSubmit, formState:{errors}} = useForm<formData>()

  async function handleLogin({email, password}: formData) {
    try {
      const response = await api.post('auth/login', {email, password})
      console.log(response.data)
      console.log('passou')
      navigation.navigate('home')
    } catch(error) {
      if(axios.isAxiosError(error)) {
        console.log(error)
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('signup')
  }
  function handle() {
    navigation.navigate('confirmsign')
  }

  return (
    <Container>
        <Title>Login</Title>
        
        <Controller 
        control={control}
        name='email'
        rules={{
          required: 'informe o email'
        }}
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='email' 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />
        <Controller 
        control={control}
        name='password'
        rules={{
          required: 'informe a senha'
        }}
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='senha' 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />

      <Button 
      title='Entrar'
      onPress={handleSubmit(handleLogin)}/>
        <Button  title='Cadastrar' onPress={handleNewAccount}/>
        <Button  title='confirmar email' onPress={handle}/>


    </Container>
  );
}