import { Paper, useCss } from '@mantine/core'
const FrostedPaper = ({ children }) => {
  const { css, cx } = useCss()
  console.log(css, cx)
  return (
    <Paper
      shadow="lg"
      padding="md"
      radius="xl"
      withBorder
      sx={(theme) => {
        return {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] + 'a6' : theme.colors.gray[2] + 'a6',
          transition: 'background-color 0.2s ease-in-out, transform 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] + 'a6' : theme.colors.gray[1] + 'a6',
            transform: 'translateY(-1px) scale(1.02) translateZ(0)',
          },
          backdropFilter: 'blur(25px)',
          boxShadow: '0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 28px 23px -7px, rgb(0 0 0 / 4%) 0px 12px 12px -7px, inset 0 1px 0 1px rgba(255,255,255,0.1)',
          zIndex: '1',
          willChange: 'transform',
          WebkitFontSmoothing: 'subpixel-antialiased',
        }
      }}
    >
      {children}
    </Paper>
  )
}

export default FrostedPaper
