import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from('#circle',{
      x:-200,
      y:-150,
      opacity:0,
      duration:1.5,
      delay:0.5
      
    },'same')
    tl.from('#square',{
      x:200,
      y:-150,
      opacity:0,
      duration:1.5,
      delay:0.5
    },'same')
    tl.to('#diamand',{
      opacity:1,
      scale:20,
      duration:2,
      rotate:360,
    })
    tl.to('#diamand',{
      opacity:1,
      scale:0,
      duration:2,
      rotate:-360,
    })
  })

  return (
    <main className='min-h-screen w-screen relative overflow-hidden bg-gray-500'>
      <div id='circle' className='bg-amber-300 h-20 w-20 rounded-full absolute top-5 left-32 '></div>
      <div  id='square' className='bg-amber-300 h-20 w-20 rounded absolute rotate-12 top-5 right-32 '></div>
      <div id='diamand' className='bg-amber-300  h-20 w-20 rounded absolute opacity-0 rotate-45 top-1/2 right-1/2 '></div>

    </main>
  )
}

export default App
