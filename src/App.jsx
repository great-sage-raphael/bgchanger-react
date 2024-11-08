import { useState } from 'react'



function App() {
let bgarray=['https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
const [bgcolor,setbgcolor]=useState('')
const[bgimage,setbgimage] =useState('')
  return (
  
     <div className='w-full h-screen duration-300'style={{backgroundColor:bgcolor,backgroundImage: bgimage ? `url(${bgimage})`: `none`,
     backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
      
      <div className=' fixed bottom-10 left-1/2 transform -translate-x-1/2  bg-slate-400 rounded-3xl shadow-lg'>
       
      <div className=' rounded-lg h-20 flex items-center justify-center w-full p-8 pos'>
      
      <button 
      className='bg-red-500 mr-2 rounded-2xl' 
      onClick={()=>setbgimage(bgarray[0])}
      >image1</button>
      <button 
      className='bg-red-500 mr-2 rounded-2xl' 
      onClick={()=>setbgimage(bgarray[1])}
      >image2</button>
      <button 
      className='bg-green-600 mr-2 rounded-2xl '
      onClick={()=>{setbgcolor('green');setbgimage('')}}
      >green</button>
      <button className='bg-black mr-2 rounded-2xl'
      onClick={()=>{setbgcolor('black');setbgimage('')}}
      >black</button>
      <button className='bg-blue-600 rounded-2xl'
      onClick={()=>{setbgcolor('blue');setbgimage('')}}
      >blue</button>
    </div>
      </div>
      
     </div>
    
  )
}

export default App
