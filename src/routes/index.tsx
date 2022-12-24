import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const contextData = useContext(AuthContext)
  console.log(contextData)
  return (
    <NavigationContainer>
        <AuthRoutes />
    </NavigationContainer>

  );
}