import React from 'react';
import {Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

import { Container, Text } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';

import {api} from '../../services/api'
import axios from 'axios'



type formDataProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function SignUp() {

  const navigation = useNavigation() 

  const {control, handleSubmit, formState:{errors}} = useForm<formDataProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSingUp({email, first_name, last_name, password}: formDataProps) {
   
    try {
      const response = await api.post('/auth/sign-up', {email, first_name, last_name, password})
      console.log(response.data)
      console.log('passou')

    } catch(error) {
      if(axios.isAxiosError(error)) {
        console.log(error.response?.data)
      }
    }
  }

  return (
    <Container>

        <Text>Cadastro</Text>

        <Controller 
        control={control}
        name='email'
        rules={{
          required: 'informe o email'
        }}
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Email' 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />
  
        <Controller 
        control={control}
        name='first_name'
        rules={{
          required: 'informe o nome',
        }}        
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Nome' 
            onChangeText={onChange}
            value={value}
          />
        )}
        />

        <Controller 
        control={control}
        name='last_name'
        rules={{
          required: 'informe o ultimo nome'
        }}
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Ultimo nome' 
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
            placeholder='Senha' 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />

        <Controller 
        control={control}
        name='passwordConfirm'
        rules={{
          required: 'informe a confirmação de senha'
        }}
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Confirme a senha' 
            onChangeText={onChange}
            value={value}  
            onSubmitEditing={handleSubmit(handleSingUp)}
            returnKeyType='send'
          />
        )}
        />
      
   
      <Button 
      title='Criar conta em aca.so'
      onPress={handleSubmit(handleSingUp)}
      />

      <Button title='voltar ao login' onPress={handleGoBack}/>


  


    </Container>
  );
}