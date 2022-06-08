import Image from 'next/image'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="border-b-4 border-indigo-600 p-4 bg-white text-white h-28 flex items-center">
        <Image src="/logo.png" alt='Logo Marca' width='332' height='132' />
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
