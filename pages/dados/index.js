import Footer from '../../components/footer'

export default function Dados() {
  return (
    <>
      <div className='h-screen  flex flex-col items-center bg-white'>
        <h1 className='font-bold text-2xl p-8'>Agora falta só um pouco!</h1>
        <h2 className="text-xl p-2">Dados para o contato</h2>

        <div className='mt-8 mb-4'>
          <form>
            <div className='mt-4'>
              <label
                htmlFor='nome'
                className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
              >
                Nome
              </label>
              <input
                type='text'
                name='nome'
                id='nome'
                // value={usuario.l2idempr || ''}
                // onChange={(event) => {
                //   setUsuario({
                //     ...usuario,
                //     l2idempr: 1, //Number(event.target.value), Vai ser um select
                //   })
                // }}
                placeholder='Digite seu nome'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
              >
                E-mail
              </label>
              <input
                type='text'
                name='email'
                id='email'
                // value={usuario.l2nomeus || ''}
                // onChange={(event) =>
                //   setUsuario({
                //     ...usuario,
                //     l2nomeus: event.target.value,
                //   })
                // }
                placeholder='examplo@examplo.com'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between mb-2'>
                <label
                  htmlFor='telefone'
                  className='text-sm text-gray-600 dark:text-gray-200'
                >
                  Telefone
                </label>
              </div>

              <input
                type='text'
                name='telefone'
                id='telefone'
                // value={usuario.l2senhau || ''}
                // onChange={(event) =>
                //   setUsuario({
                //     ...usuario,
                //     l2senhau: event.target.value,
                //   })
                // }
                placeholder='Digite seu telefone'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-4'>
              <label
                htmlFor='documento'
                className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
              >
                Informe Cnpj ou Cpf
              </label>
              <input
                type='text'
                name='documento'
                id='documento'
                // value={usuario.l2uemail || ''}
                // onChange={(event) =>
                //   setUsuario({
                //     ...usuario,
                //     l2uemail: event.target.value,
                //   })
                // }
                placeholder='CNPJ ou CPF'
                className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40'
              />
            </div>

            <div className='mt-6 text-base'>
              <button
                type='button'
                // onClick={handleInsertUser}
                className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50'
              >
                {/* <Edit size={24} color='white' className='mr-3 inline' /> */}
                <span className='text-lg'>Finalizar</span>
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )

}