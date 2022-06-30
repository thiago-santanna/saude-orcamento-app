import ufJs from '../../public/uf.json'

export default function Estados() {
  const ufsBrasil = ufJs.UF

  return (
    <>
      <div className='w-full'>
        <h1 className='font-bold text-2xl p-8'>Qual seu estado?</h1>
        <div className='border-l-4 border-sky-600 text-gray-800 p-4 text-center'>
          <select className='w-full p-2'>
            {ufsBrasil.map((uf) => (
              <option value={uf.nome} key={uf.sigla}>
                {uf.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}
