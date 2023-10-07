import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import inter from './assets/Inter/Inter.ttf'
const theme = {
  colors: {
    yellow: '#EDAA25',
    black: '#1E1E1E'
  }
}
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: inter;
    src: url(${inter}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 24px;
  }
`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
