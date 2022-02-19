import { Anchor, Center } from '@mantine/core'
import FrostedPaper from './FrostedPaper'
const Footer = () => {
  return (
    <Center
      style={{
        width: '100%',
        height: '100px',
        bottom: '0px',
      }}
    >
      <footer style={{ padding: '10px' }}>
        <FrostedPaper style={{ color: 'white', textAlign: 'center' }}>
          Built with <Anchor href="https://nextjs.org/">Next.js</Anchor> &amp; <Anchor href="https://mantine.dev/">Mantine</Anchor>. Powered by <Anchor href="https://vercel.com/">Vercel</Anchor>
        </FrostedPaper>
      </footer>
    </Center>
  )
}

export default Footer
