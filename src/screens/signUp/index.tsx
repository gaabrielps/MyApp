import React, { useState } from 'react';
import {Text, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Container, Title } from './styles';

import { Button } from '../../components/button';
import { Input } from '../../components/input';

import {api} from '../../services/api'
import axios from 'axios'
import { AuthNavigatorRoutesProps } from '../../routes/auth.routes';
import { useAuth } from '../../hooks/useAuth';




type formDataProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


const validationDataInputs = yup.object({
  first_name: yup.string().required('informe o nome'),

  last_name: yup.string().required('informe o ultimo nome'),

  email: yup.string().required('informe o email').email('informe um email valido'),

  password: yup.string().required()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-6])/,
    "minimo de 6 caracteres sendo minusculas e maisuculas"
  ),

  passwordConfirm: yup.string().required('confirme a senha').oneOf([yup.ref('password')], 
  'a confirmação de senha nao confere')
})


export function SignUp() {
  const {getDatas} = useAuth()
  const[email, setEmail] = useState('')
  console.log('teste', email)

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  

  const {control, handleSubmit, formState:{errors}} = useForm<formDataProps>({
    resolver: yupResolver(validationDataInputs)
  })

  function handleGoBack() {
    navigation.goBack()
  }


  async function handleSingUp({email, first_name, last_name, password}: formDataProps) {

    try {
      const response = await api.post('/auth/sign-up', {email, first_name, last_name, password})
      console.log(response.data)
      console.log('passou')
      setEmail(email) 
      

      navigation.navigate('confirmsign')
      

      
      

    } catch(error) {
      if(axios.isAxiosError(error)) {
        
      }
    }
   

  }

  return (
    <Container>
            

        <Title>Cadastro</Title>

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
        <Text style={styles.baseText}>{errors.email?.message}</Text>

  
        <Controller 
        control={control}
        name='first_name'       
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Nome' 
            onChangeText={onChange}
            value={value}
          />
        )}
        />
        <Text style={styles.baseText}>{errors.first_name?.message}</Text>
        

        <Controller 
        control={control}
        name='last_name'
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Ultimo nome' 
            onChangeText={onChange}
            value={value} 
             
          />
        )}
        />
        <Text style={styles.baseText}>{errors.last_name?.message}</Text>


        <Controller 
        control={control}
        name='password'
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Senha'
            secureTextEntry 
            onChangeText={onChange}
            value={value}  
          />
        )}
        />
        <Text style={styles.baseText}>{errors.password?.message}</Text>


        <Controller 
        control={control}
        name='passwordConfirm'
        render={({field: {onChange, value}}) =>(
          <Input 
            placeholder='Confirme a senha' 
            onChangeText={onChange}
            secureTextEntry
            value={value}  
            onSubmitEditing={handleSubmit(handleSingUp)}
            returnKeyType='send'
          />
        )}
        />
        <Text style={styles.baseText}>{errors.passwordConfirm?.message}</Text>


      
   
      <Button 
      title='Criar conta em aca.so'
      onPress={handleSubmit(handleSingUp)}
      
      />

      <Button title='Voltar ao login' type='SECONDARY' onPress={handleGoBack}/>


  


    </Container>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 8.5,
    fontWeight: "bold"
  }
});


