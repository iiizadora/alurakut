import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* Reset*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    
    font-size: sans-serif;
    background: #D9E6F6
  }

  #__next {
    display:flex;
    min-height: 100vh;
    flex-direction:column;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
