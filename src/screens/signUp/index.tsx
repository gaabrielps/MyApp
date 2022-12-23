import React from 'react';
import {useNavigation} from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'

import { Container, Text } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';



type formDataProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export function SignUp() {
  const navigation = useNavigation() 

  const {control, handleSubmit} = useForm<formDataProps>()

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