import Link from "next/link";
import Port from "../components/porte-entidade";

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center bg-white'>
        <h1 className='font-bold text-2xl p-8'>Monte seu plano</h1>
        <p className='p-2 text-center mb-4'>Precisamos de algumas informações para sugerirmos o melhor plano.</p>
        <div className='border-b-2 border-sky-600 rounded-b-lg text-gray-800 p-4 w-full text-center'>
          <span className='text-xl font-bold'>Possui plano?</span>
          <div className='flex items-center justify-between m-4'>
            <div className='flex items-center'>
              <input className='h-8 w-8 mr-4' name='sim' type="radio" />
              <label
                htmlFor='sim'
                className='block text-lg font-semibold text-gray-800'
              >
                SIM
              </label>
            </div>

            <div className='flex items-center'>
              <input className='h-8 w-8 mr-4' name='nao' type="radio" />
              <label
                htmlFor='sim'
                className='block text-lg font-semibold text-gray-800'
              >
                NÃO
              </label>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className='font-bold text-2xl p-8'>Qual seu plano?</h1>
          <div className='border-b-2 border-sky-600 rounded-b-lg text-gray-800 p-4 text-center'>
            <select className="w-full p-2 text-gray-800">
              <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
              <option value="AMIL" key="AMIL">AMIL</option>
              <option value="BRADESCO" key="BRADESCO">BRADESCO</option>
              <option value="UNIMED " key="UNIMED">UNIMED</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <h1 className='font-bold text-2xl p-8'>Qual seu estado?</h1>
          <div className='border-b-2 border-sky-600 rounded-b-lg text-gray-800 p-4 text-center'>
            <select className="w-full p-2">
              <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
              <option value="RIO DE JANEIRO" key="RIO DE JANEIRO">RIO DE JANEIRO</option>
              <option value="PERNAMBUCO" key="PERNAMBUCO">PERNAMBUCO</option>
              <option value="SÃO PAULO " key="SÃO PAULO">SÃO PAULO</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <h1 className='font-bold text-2xl p-8'>Qual porte de sua empresa?</h1>
          <div className="flex flex-col gap-4">
            <Port />
          </div>
        </div>

        <div className="border-2 border-sky-600 rounded-lg py-4 px-4 my-4 ml-2 mr-2">
          <Link href='/dados'>
            <a className='text-sky-500 text-lg pl-1 focus:outline-none focus:underline hover:underline'>Toque para finalizar seu cadastro</a>
          </Link>
        </div>
      </div>
    </>
  )
}
