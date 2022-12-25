import React from "react"
import {StatusBar} from 'react-native'

import {ThemeProvider} from 'styled-components'
import theme from "./src/theme"

import { Routes } from "./src/routes"
import { AuthContextProvider } from "./src/contexts/AuthContext"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      
      />
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>


    </ThemeProvider>

  )
}
