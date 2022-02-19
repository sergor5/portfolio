import { Anchor, Center, Text } from '@mantine/core'
import FrostedPaper from './FrostedPaper'
const Footer = () => {
  return (
    <Center
      style={{
        position: 'absolute',
        width: '100%',
        height: '100px',
        bottom: '0px',
      }}
    >
      <footer style={{ padding: '10px' }}>
        <FrostedPaper style={{ textAlign: 'center' }}>
          <Text>
            Built with{' '}
            <Anchor href="https://nextjs.org/" target="_blank">
              Next.js
            </Anchor>{' '}
            &amp;{' '}
            <Anchor href="https://mantine.dev/" target="_blank">
              Mantine
            </Anchor>
            . Powered by{' '}
            <Anchor href="https://vercel.com/" target="_blank">
              Vercel
            </Anchor>
          </Text>
        </FrostedPaper>
      </footer>
    </Center>
  )
}

export default Footer
