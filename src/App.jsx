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
      <div className='h-10 w-full flex justify-between items-center p-5 bg-amber-300 '>
        <div>Logo</div>
        <div className='flex gap-3 border px-3 py-1 rounded-md '>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Project</a>
          <a href="">Contact</a>
        </div>
        <div>Let's Talk</div>
      </div>
    </main>
  )
}

export default App
