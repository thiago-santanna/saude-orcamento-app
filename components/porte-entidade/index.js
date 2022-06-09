
export default function Port() {
  return (
    <>
      <div className='bg-sky-600 text-white p-2 text-center'>
        <div className='flex items-center justify-center'>
          <span className='pr-2 text-lg'>Quantidade:</span>
          <input className='rounded-md h-8 w-20 mr-4' name='sim' type="number" />
          <span className="text-xl font-bold"> 00 a 18</span>
        </div>
      </div>
    </>
  )
}