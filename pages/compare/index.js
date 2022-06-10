import Footer from '../../components/footer'
import PlanoCompare from '../../components/plano-compare'

export default function Compare() {
  return (
    <>
      <div className='h-screen  flex flex-col items-center bg-white max-w-lg lg:m-auto'>
        <h1 className='font-bold text-2xl p-8'>Compare os planos</h1>
        <h2 className="text-xl p-2">Fulano de tal estas são algumas opções para você</h2>

        <PlanoCompare />
        <PlanoCompare />
        <PlanoCompare />
        <PlanoCompare />

        <Footer />
      </div>
    </>
  )
}