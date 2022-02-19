import { useState } from 'react'
import { Header, HeaderProps, Avatar, Burger, Drawer, Group, Switch, useMantineColorScheme } from '@mantine/core'

const CustomHeader = (props: Omit<HeaderProps, 'children'>) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const title = menuOpened ? 'Close navigation' : 'Open navigation'

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDarkMode = colorScheme === 'dark'

  return (
    <>
      <Drawer opened={menuOpened} onClose={() => setMenuOpened(false)} title="Menu" padding="xl" size="xl" position="top">
        <Group>
          <>Dark Mode: </>
          <Switch checked={isDarkMode} onClick={() => toggleColorScheme()} readOnly onLabel="ON" offLabel="OFF" size="xl"></Switch>
        </Group>
      </Drawer>

      <Header
        fixed
        {...props}
        sx={(theme) => {
          return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backdropFilter: 'blur(10px)',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] + 'a6' : '#ffffffa6',
          }
        }}
      >
        <Avatar
          color="green"
          radius="xl"
          styles={(theme) => ({
            root: {
              border: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.green[5] + 'a6' : '1px solid ' + theme.colors.green[5] + 'a6',

              transition: 'transform 0.2s ease-in-out, border 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.15) translateZ(0) ',
                borderWidth: '2px',
              },
              willChange: 'transform',
              WebkitFontSmoothing: 'subpixel-antialiased',
              backfaceVisibility: 'hidden',
            },
            placeholder: {
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.green[5] + 'a6' : theme.colors.green[0] + 'a6',
              },
            },
          })}
        >
          SO
        </Avatar>
        <Burger
          opened={menuOpened}
          onClick={() => setMenuOpened((o) => !o)}
          title={title}
          styles={{
            root: { color: 'red' },
            burger: { color: 'red' },
          }}
        />
      </Header>
    </>
  )
}

export default CustomHeader
