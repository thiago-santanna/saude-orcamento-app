export default function Port({ faixa = '0 - 0' }) {
  return (
    <>
      <div className='grid grid-cols-3 border-l-4 border-sky-600 p-2 text-center justify-center'>
        <label className='text-gray-800 '>Vidas na faixa de:</label>
        <div>
          <input className='w-1/2 border-2 border-sky-600' type='number' />
        </div>

        <div className='p-1'>
          <label className='p-2 text-gray-800 '>{faixa}</label>
        </div>
      </div>
    </>
  )
}
