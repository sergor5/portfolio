import Head from 'next/head'
import { Center, Image, Container, Group, Grid, Space, Text, Title } from '@mantine/core'
import FrostedPaper from '../components/FrostedPaper'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sergen ORIN&apos;s Personal Website</title>
        <meta name="description" content="Sergen ORIN's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ minHeight: 900 }}>
        <Space h="lg" />

        <FrostedPaper>
          <Grid>
            <Grid.Col span={12} xs={12} sm={3}>
              <Center>
                <Image
                  src="/profile-photo.jpg"
                  radius={'xl'}
                  height={218}
                  width={163}
                  sx={(theme) => ({
                    transition: 'transform 0.2s ease-in-out',
                    borderRadius: theme.radius.xl,
                    '&:hover': {
                      transform: 'translateY(-1px) scale(1.02) translateZ(0) ',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      zIndex: -1,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      top: '0px',
                      borderRadius: theme.radius.xl,
                      boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
                      transition: 'opacity 0.2s ease-in-out',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  })}
                />
              </Center>
            </Grid.Col>
            <Grid.Col span={12} xs={12} sm={9} style={{ padding: 10 }}>
              <Group direction="column" spacing={0}>
                <Title
                  order={2}
                  sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.colors.dark[8],
                    transition: 'transform 0.2s ease-in-out',
                    transformOrigin: 'top left',
                    '&:hover': {
                      color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                      transform: 'translateY(0px) scale(1.02) translateZ(0) ',
                    },
                    WebkitFontSmoothing: 'subpixel-antialiased',
                    willChange: 'transform',
                  })}
                >
                  Sergen ORIN
                </Title>
                <Text
                  sx={(theme) => ({
                    transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
                    transformOrigin: 'top left',
                    '&:hover': {
                      color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                      transform: 'translateY(0px) scale(1.02) translateZ(0) ',
                    },
                    WebkitFontSmoothing: 'subpixel-antialiased',
                    willChange: 'transform',
                  })}
                >
                  Full-stack Web Developer
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </FrostedPaper>
      </Container>
    </>
  )
}
