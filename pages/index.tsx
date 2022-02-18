import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Container, Button, Switch, useMantineColorScheme } from '@mantine/core'

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <div className={styles.container}>
      <Head>
        <title>Sergen ORIN&apos;s Personal Website</title>
        <meta name="description" content="Sergen ORIN's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Container>
          <Button onClick={()=> toggleColorScheme()}>Click</Button>
          <Switch checked={isDarkMode} onClick={()=> toggleColorScheme()} readOnly></Switch>
        </Container>
    </div>
  )
}
