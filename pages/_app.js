import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="border-b-4 mt-2 border-sky-600 p-4 bg-white text-white h-28 flex items-center">
        <Link href='/'>
          <a className='text-lg pl-1 focus:outline-none focus:underline hover:underline'>
            <Image src="/logo.png" alt='Logo Marca' width='332' height='132' />
          </a>
        </Link>
        <Header />
      </header>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
