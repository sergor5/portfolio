import Head from 'next/head'
import { Center, Image, Container, Group, Grid, Space, Text, Title } from '@mantine/core'
import FrostedPaper from '../components/FrostedPaper'
import styles from '../styles/Home.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '@mantine/hooks'
import { Shapes } from '../components/Shapes'

export default function Home() {
  const matches = useMediaQuery('(max-width: 900px)')

  return (
    <>
      <Head>
        <title>Sergen ORIN&apos;s Personal Website</title>
        <meta name="description" content="Sergen ORIN's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ minHeight: 900 }}>
        <Space h="lg" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              translateY: 15,
              scale: 1,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            },
          }}
        >
          <FrostedPaper>
            <Grid>
              <Grid.Col span={12} xs={4} sm={4}>
                <Center>
                  <Image
                    alt="porfile picture"
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
              <Grid.Col span={12} xs={8} sm={8} style={{ padding: 10 }}>
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
                    Frontend Web Developer
                  </Text>
                </Group>
              </Grid.Col>
            </Grid>
          </FrostedPaper>
        </motion.div>
        <Space />
        {/* <Shapes /> */}
      </Container>
    </>
  )
}
