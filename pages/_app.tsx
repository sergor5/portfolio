import  { AppProps} from 'next/app'
import Head from 'next/head'
import { MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core'
import { useLocalStorageValue, useColorScheme } from '@mantine/hooks'
import Layout from '../components/layout'

import '../styles/globals.css'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  const preferedColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({ key: 'colorScheme', defaultValue: preferedColorScheme })
  
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || colorScheme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{colorScheme}}
        >
          <Layout> 
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default MyApp
