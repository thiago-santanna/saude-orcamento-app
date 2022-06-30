import Link from 'next/link'
import { useState } from 'react'
import Estados from '../components/estados'
import Footer from '../components/footer'
import Plano from '../components/planos'
import Port from '../components/porte-entidade'

export default function Home() {
  const [showPLano, setShowPlano] = useState(false)

  function handleShowPlano(show) {
    setShowPlano(show)
  }

  return (
    <>
      <div className='flex flex-col items-center bg-white max-w-2xl m-auto'>
        <h1 className='font-bold text-2xl p-8'>Monte seu plano</h1>
        <p className='p-2 text-center mb-4'>
          Precisamos de algumas informações para sugerirmos o melhor plano.{' '}
          <span className='font-bold'>É muito rápido</span>
        </p>

        <div className='border-l-4 border-sky-600 text-gray-800 p-4 w-full text-center'>
          <span className='text-xl font-bold'>Possui plano?</span>
          <div className='flex items-center justify-between m-4'>
            <div className='flex items-center'>
              <input
                onClick={() => handleShowPlano(true)}
                className='h-8 w-8 mr-4'
                id='sim'
                name='tem_plano'
                type='radio'
              />
              <label
                htmlFor='sim'
                className='block text-lg font-semibold text-gray-800'
              >
                SIM
              </label>
            </div>

            <div className='flex items-center'>
              <input
                onClick={() => handleShowPlano(false)}
                className='h-8 w-8 mr-4'
                id='nao'
                name='tem_plano'
                type='radio'
              />
              <label
                htmlFor='nao'
                className='block text-lg font-semibold text-gray-800'
              >
                NÃO
              </label>
            </div>
          </div>
        </div>

        {showPLano && <Plano />}

        <Estados />

        <div className='w-full'>
          <h1 className='font-bold text-2xl p-8'>Qual porte de sua empresa?</h1>
          <div className='flex flex-col gap-4'>
            <Port />
          </div>
        </div>

        <div className='mt-6 text-base'>
          <button
            type='button'
            // onClick={handleInsertUser}
            className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50'
          >
            {/* <Edit size={24} color='white' className='mr-3 inline' /> */}
            <Link href='/dados'>
              <a className='text-lg pl-1 focus:outline-none focus:underline hover:underline'>
                Continuar
              </a>
            </Link>
          </button>
        </div>

        <Footer />
      </div>
    </>
  )
}
