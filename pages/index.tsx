import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Image, Container, Group, Grid, Space, Switch, Text, Title, useMantineColorScheme } from '@mantine/core'
import FrostedPaper from '../components/FrostedPaper'

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Space h="md" />

        <Group>
          <>Dark Mode: </>
          <Switch checked={isDarkMode} onClick={() => toggleColorScheme()} readOnly onLabel="ON" offLabel="OFF" size="xl"></Switch>
        </Group>

        <Space h="md" />

        <FrostedPaper>
          <Grid>
            <Grid.Col span={3}>
              <div
                style={{
                  width: 200,
                }}
              >
                <Image src="/profile-photo.jpg" radius={'xl'} />
              </div>
            </Grid.Col>
            <Grid.Col span={9} style={{ padding: 10 }}>
              <Title order={2}>Sergen ORIN</Title>
              <Text
                sx={(theme) => ({
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                  },
                })}
              >
                Full-stack Web Developer
              </Text>
            </Grid.Col>
          </Grid>
        </FrostedPaper>
      </Container>
    </div>
  )
}
