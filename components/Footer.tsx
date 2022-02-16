import { Anchor, Center } from "@mantine/core"

const Footer = () => {

    return (
        <Center style={{
            width: '100%',
            height: '100px',
            bottom: '0px'
        }}>
            <footer>Built with <Anchor href="https://nextjs.org/">Next.js</Anchor> &amp; <Anchor href="https://mantine.dev/">Mantine</Anchor>. Powered by <Anchor href="https://vercel.com/">Vercel</Anchor></footer>
        </Center>
    )
 }


export default Footer