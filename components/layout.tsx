import Footer from './Footer'
import { AppShell } from '@mantine/core'
import CustomHeader from './Header'

export default function Layout({ children }) {
  return (
    <AppShell padding={0}>
      <CustomHeader padding="md" height={80} />
      {children}
      <Footer />
    </AppShell>
  )
}
