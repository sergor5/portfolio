import { Center } from "@mantine/core"

const Footer = () => {

    return (
        <Center style={{
            width: '100%',
            height: '100px',
            bottom: '0px'
        }}>
            <footer>Built with <a href="https://nextjs.org/">Next.js</a> &amp; <a href="https://mantine.dev/">Mantine</a>. Powered by <a href="https://vercel.com/">Vercel</a></footer>
        </Center>
    )
 }


export default Footer