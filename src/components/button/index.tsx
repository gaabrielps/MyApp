import React from 'react';
import { Container, Title, ButtonTypeStyleProps } from './styles';
import {ButtonProps, TouchableOpacityProps} from  'react-native'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps 
}
export function Button({title,type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container
    type={type} 
    {...rest}>
      <Title  type={type} 
   {...rest}>
      {title}
      </Title>
      
    </Container>
    

        
    

  );
}