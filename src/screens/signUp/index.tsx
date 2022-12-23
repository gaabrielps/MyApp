import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

import { Container, Text } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { TextProps } from 'react-native';



type formDataProps = {
  name: string;
  lastName: string;
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

  function handleSingUp(data: formDataProps) {
    console.log(data);

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
        name='name'
        rules={{
          required: 'informe o nome',
          pattern: {
            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'E-mail inválido'
          }
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
        name='lastName'
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