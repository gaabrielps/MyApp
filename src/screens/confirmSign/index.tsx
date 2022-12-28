import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, Text } from './styles';
import Acaso from './../../../assets/acaso.svg'


import {useNavigation} from '@react-navigation/native'


import {useForm, Controller} from 'react-hook-form'

import {api} from '../../services/api'
import axios from 'axios'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';
import { useAuth } from '../../hooks/useAuth';
import { Title } from '../../components/Title';
import { Header } from '../../components/header';

type dataConfirmEmailProps = {
  email: string;
  confirmation_code: string;
}


export function ConfirmSign() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const {user} = useAuth()


  const {control, handleSubmit, formState:{errors}} = useForm<dataConfirmEmailProps>()


  async function handleConfirmEmail({confirmation_code, email}:dataConfirmEmailProps) {
    email= user.email
    console.log(email)
    try {
      const response = await api.post('/auth/confirm-sign-up', {email,confirmation_code})
      console.log(response.data)
      console.log('passou')

      navigation.navigate('login')
  } catch (error) {

    if(axios.isAxiosError(error)) {
      console.log(error.response?.data)
    }
  }




  }


  return (
    <Container>
      <Header />
      <Title title='Confirmar e-mail'/>

      
      

        <Controller 
        control={control}
        name='confirmation_code'
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Digite o código' 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />
      <Button 
      title='Confirmar e-mail'
      onPress={handleSubmit(handleConfirmEmail)}
      
      />
      <Text>Não recebeu o código?</Text>
      <Button 
      title='Reenviar código'
      type='SECONDARY'
      onPress={handleSubmit(handleConfirmEmail)}
      />


    </Container>
  )
}
