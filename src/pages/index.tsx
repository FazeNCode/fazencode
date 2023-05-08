import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation_Comp from './components/Navigation_Comp'
import Board_Comp from './components/Board_Comp'
import Hamburger_Comp from './components/Hamburger_Comp'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

     <Hamburger_Comp/>
      {/* <Navigation_Comp/> */}
      <Board_Comp/>
      
      
     
 
    </main>
  )
}
