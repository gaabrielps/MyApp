import React from 'react';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, Text } from './styles';

import {useNavigation} from '@react-navigation/native'


import {useForm, Controller} from 'react-hook-form'

import {api} from '../../services/api'
import axios from 'axios'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';

type dataConfirmEmailProps = {
  email: string;
  confirmation_code: string;
}

export function confirmSign() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()



  const {control, handleSubmit, formState:{errors}} = useForm<dataConfirmEmailProps>()


  async function handleConfirmEmail({email,confirmation_code}:dataConfirmEmailProps) {
    try {
      const response = await api.post('/auth/sign-up', {email,confirmation_code})
      console.log(response.data)
      console.log('passou')
  } catch (error) {

    if(axios.isAxiosError(error)) {
      console.log(error.response?.data)
    }
  }


  }



  return (
    <Container>
      
      <Text>Confirme Email</Text>

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
      title='Confirmar'
      onPress={handleSubmit(handleConfirmEmail)}
      />


    </Container>
  );
}