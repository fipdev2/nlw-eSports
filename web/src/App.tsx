import './styles/main.css';
import Logo from './assets/Logo.svg'

function App() {


  return (
    <div className='max-w-[1334px] flex flex-col items-center my-20 mx-auto'>
      {/* header */}
      <img src={Logo} alt="logo" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-rainbow text-transparent bg-clip-text'>duo</span> está aqui
      </h1>

      {/* cards */}
      <div className='grid grid-cols-6 gap-6 mt-16'>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 1.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 2.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 3.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 5.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 6.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={`/image 7.png`} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-black-gradient absolute bottom-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm'>4 anuncios</span>
          </div>
        </a>

      </div>

      <div className='bg-rainbow rounded-lg self-stretch mt-8 pt-1'>
        <div className='bg-[#2A2634] px-8 py-6 rounded-md flex justify-between items-center'>

          <div>
            <strong className='text-2xl text-white block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded-md'>Publicar anúncio</button>
        </div>
      </div>


    </div>
  )
}

export default App
