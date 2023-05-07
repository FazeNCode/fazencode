import Image from 'next/image'
import { Inter } from 'next/font/google'
import MapleBoard from '../images/MapleBoard.png';
import roughboard from '../images/roughboard.png';
import Navigation_Comp from './components/Navigation_Comp';
interface CardProps {
  title: string;
  description: string;
}



const inter = Inter({ subsets: ['latin'] })

// const Maple = MapleBoard.src;

const Maple = roughboard.src;

export default function Home({ title, description }: CardProps) {
  return (
    <main>
      
<p className='bg-gray-600 text-white text-3xl p-6 m-6 rounded-lg text-center'>test environment on devE branch</p>

<Navigation_Comp/>

      <article className=''>
  <div className="p-10 sm:space-x-4 ">
    
      <span className=' '>
      </span>
        <img  src={Maple} alt="My Image" className=" sm:w-80 sm:h-80  "/>
        <img src={Maple} alt="My Image" className=" sm:w-80 sm:h-80   "/>
        <img src={Maple} alt="My Image" className=" sm:w-80 sm:h-80   "/>
        <img src={Maple} alt="My Image" className=" sm:w-80 sm:h-80   "/>
        <img src={Maple} alt="My Image" className=" sm:w-80 sm:h-80   "/>
  </div>
    
      </article>
   
      



     

    
    </main>

    
  )
}


