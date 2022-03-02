import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import { Shapes } from '../components/Shapes'

export default function Layout({ children }) {
  return (
    <>
      <Header padding="md" height={80} />
      {children}
      <Footer />

      <Shapes />
    </>
  )
}
