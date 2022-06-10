import Link from "next/link";

export default function PlanoCompare() {
  return (
    <>
      <div className='border-l-4 border-sky-600 text-gray-800 p-4 w-full grid grid-cols-2 gap-4 mt-4'>
        <div className="flex flex-col gap-2">
          <span className="font-bold">CD1020</span>
          <span>AMIL</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold">Classificação</span>
          <span>X X X X X</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold">Abrangência</span>
          <span>Nacional</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-bold">Mensalidade</span>
          <span>R$ 585,00</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold">Acomodação</span>
          <span>Apartamento</span>
        </div>

        <div className='mt-6 text-base'>
          <button
            type='button'
            // onClick={handleInsertUser}
            className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50'
          >
            {/* <Edit size={24} color='white' className='mr-3 inline' /> */}
            <Link href='#'>
              <a className='text-lg pl-1 focus:outline-none focus:underline hover:underline'>Selecionar</a>
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}