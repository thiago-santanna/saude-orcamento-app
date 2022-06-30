import styles from '../../styles/Plano.module.css'

export default function Plano() {
  return (
    <>
      <div className={styles.box}>
        <h1 className='font-bold text-2xl p-8'>Qual seu plano?</h1>
        <div className='border-l-4 border-sky-600 text-gray-800 p-4 text-center'>
          <select className='w-full p-2 text-gray-800'>
            <option value='SELECIONE' key='SELECIONE'>
              SELECIONE
            </option>
            <option value='AMIL' key='AMIL'>
              AMIL
            </option>
            <option value='BRADESCO' key='BRADESCO'>
              BRADESCO
            </option>
            <option value='UNIMED ' key='UNIMED'>
              UNIMED
            </option>
          </select>
        </div>
      </div>
    </>
  )
}
