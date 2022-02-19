import { Paper } from '@mantine/core'
const FrostedPaper = ({ children, style = {} }) => {
  return (
    <Paper
      padding="md"
      radius="xl"
      withBorder
      style={style}
      sx={(theme) => {
        return {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] + 'a6' : '#ffffffa6',
          transition: 'background-color 0.2s ease-in-out, transform 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] + 'a6' : theme.colors.gray[0] + 'a6',
            transform: 'translateY(-1px) scale(1.02) translateZ(0) ',
          },
          backdropFilter: 'blur(15px)',
          boxShadow: theme.shadows.lg + ', inset 0 1px 0 1px rgba(255,255,255,0.1)',
          zIndex: '1',
          willChange: 'transform',
          WebkitFontSmoothing: 'subpixel-antialiased',
          backfaceVisibility: 'hidden',
        }
      }}
    >
      {children}
    </Paper>
  )
}

export default FrostedPaper
