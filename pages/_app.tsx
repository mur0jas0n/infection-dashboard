// basecode => https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../components/templates/theme'
import Copyright from '../components/atoms/Copyright'
import Layout from '../components/templates/Layout'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
        <Component {...pageProps} />
        <Copyright />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
