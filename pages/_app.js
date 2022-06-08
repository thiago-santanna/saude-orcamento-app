import Image from 'next/image'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="p-4 bg-slate-400 text-white h-28 flex items-center">

        <Image src="/logo.png" alt='Logo Marca' width='300' height='100' />

        <Header />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
