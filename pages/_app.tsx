import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
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
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            white: '#f8f9fb',
            colors: {
              brand: ['#EBFBEE', '#D3F9D8', '#B2F2BB', '#8CE99A', '#69DB7C', '#51CF66', '#40C057', '#37B24D', '#2F9E44', '#2B8A3E'],
            },
            primaryColor: 'brand',
            colorScheme,
          }}
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
