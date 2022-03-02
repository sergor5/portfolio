import { Anchor, Center, Text } from '@mantine/core'
import FrostedPaper from './FrostedPaper'
import FooterWave from './FooterWave'
const Footer = () => {
  return (
    <Center
      style={{
        position: 'relative',
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
      <FooterWave />
    </Center>
  )
}

export default Footer
