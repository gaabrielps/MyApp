import React, { useReducer } from 'react';
import {useNavigation} from '@react-navigation/native'

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container } from './styles';
import { Title } from '../signUp/styles';

import {useForm, Controller} from 'react-hook-form'

import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

import { api } from '../../services/api';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';




type formData = {
  email: string;
  password: string;
}

export function Login() {

  const {getDatas} = useAuth()

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {control, handleSubmit, formState:{errors}} = useForm<formData>()

  async function handleLogin({email, password}: formData) {
    getDatas(email, password)
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
      title='teste'
      onPress={handleSubmit(handleLogin)}/>
        <Button  title='Cadastrar' onPress={handleNewAccount}/>
        <Button  title='confirmar email' onPress={handle}/>


    </Container>
  );
}