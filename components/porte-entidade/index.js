
export default function Port() {
  return (
    <>
      <div className='flex gap-2 border-l-4 border-sky-600 p-2 text-center justify-center'>
        <div className="p-1">
          <button className="w-1/4 text-2xl">-</button>
          <input className="w-1/2 border-2 border-sky-600" type='number' />
          <button className="w-1/4 text-2xl">+</button>
        </div>

        <div className="p-1">
          <select>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
            <option value="SELECIONE" key="SELECIONE">SELECIONE</option>
          </select>
        </div>
      </div>
    </>
  )
}