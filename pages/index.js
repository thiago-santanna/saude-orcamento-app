export default function Home() {
  return (
    <>
      <div className='h-screen overflow-hidden flex flex-col items-center bg-white'>

        <h1 className='font-bold text-2xl p-8'>Monte seu plano</h1>
        <p className='p-2 text-center mb-4'>Precisamos de algumas informações para sugerirmos o melhor plano.</p>
        <div className='bg-sky-600 text-white p-4 w-full text-center'>
          <span className='text-xl font-bold'>Possui plano?</span>
          <div className='flex items-center justify-between m-4'>
            <div className='flex items-center'>
              <input className='h-8 w-8 mr-4' name='sim' type="radio" />
              <label
                htmlFor='sim'
                className='block text-lg font-semibold text-white'
              >
                SIM
              </label>
            </div>

            <div className='flex items-center'>
              <input className='h-8 w-8 mr-4' name='nao' type="radio" />
              <label
                htmlFor='sim'
                className='block text-lg font-semibold text-white'
              >
                NÃO
              </label>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className='font-bold text-2xl p-8'>Qual seu plano?</h1>
          <div className='bg-sky-600 p-4 text-center'>
            <select className="w-full p-2">
              <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
              <option value="AMIL" key="AMIL">AMIL</option>
              <option value="BRADESCO" key="BRADESCO">BRADESCO</option>
              <option value="UNIMED " key="UNIMED">UNIMED</option>
            </select>
          </div>
        </div>

      </div>
    </>
  )
}
