import React from 'react'
import { Facebook,Instagram,Youtube,Twitter } from 'lucide-react'
import MapImg from "../public/images/myMap.png"
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='w-full flex py-4 max-h-[500px] overflow-hidden rounded-xl  bg-[#aeb8b8] my-16'>
      
      <div className='section2 flex sm:flex-col  items-center  w-2/4 '>
      <div className='flex my-2  justify-center items-center'>
      <button className='border-1 p-2 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>
        <Facebook className=' text-white '/></button>
        <button className='border-1 p-2 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>
        <Instagram className='text- text-white '/></button>
       <button className='border-1 p-2 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>

        <Youtube className=' text-white '/></button>
        <button className='border-1 p-2 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>

        <Youtube className=' text-white '/></button>
      </div>
      <Image className='w-full object-cover' src={MapImg} alt=" map image"/>
      </div>
      <div className='section1 text-[#0f3d53] flex w-2/4 justify-end  width '>
        <div className=' w-full flex flex-col justify-between items-center '>
          <h2 className='font-bold text-2xl my-4 text-[#0f3d53]'>Call us</h2>
          <form className='w-full'>
            <div className='flex flex-col mx-4'>
              <label className='mt-2 font- '>name</label>
              <input className='border-2 rounded-lg py-1 border-[#0f3d53]' />
            </div>
            <div className='flex flex-col mx-4'>
              <label className='mt-2 font- '>Email</label>
              <input className='border-2 rounded-lg py-1 border-[#0f3d53]' />
            </div>
            <div className='flex flex-col mx-4'>
              <label className='mt-2 font- '>Subject</label>
              <input className='border-2 rounded-lg py-1 border-[#0f3d53]' />
            </div>
            <div className='flex flex-col mx-4'>
              <label className='mt-2 font '>Subject</label>
              <textarea cols={6} rows={6} className='border-2 rounded-lg py-1 border-[#0f3d53]' ></textarea>
            </div>
            
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
