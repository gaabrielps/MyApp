import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import { useAuth } from '../hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const {user} = useAuth()

  console.log('user ==>>',user.email)
  
  
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>

  );
}