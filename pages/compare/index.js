
export default function Compare() {
  return (
    <>
      <div className='h-screen  flex flex-col items-center bg-white max-w-lg lg:m-auto'>
        <h1 className='font-bold text-2xl p-8'>Compare os planos</h1>
        <h2 className="text-xl p-2">Fulano de tal estas são algumas opções para você</h2>
        <div className='border-l-2 border-sky-600 text-gray-800 p-4 w-full grid grid-cols-2 gap-4 mt-4'>
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
        </div>
      </div>
    </>
  )
}