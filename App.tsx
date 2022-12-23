import React from "react"

import {ThemeProvider} from 'styled-components'
import theme from './src/theme'

import { SignUp } from "./src/screens/signUp"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>

  )
}
