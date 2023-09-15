import React from 'react'
import { Facebook,Instagram,Youtube,Search,AlignJustify } from 'lucide-react'
import LanguageChanger from './LanguageCanger'
const FirstSection = () => {
  return (
    <div className='global_bg max-w[full] flex w-full text-white  justify-around items-center px-4 '>
      <div className='font-bold transform hover:scale-110'>
        University
      </div>
      <div className='flex md:flex-1  justify-center items-center'>
      <button className='border-1 p-1 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>
        <Facebook className=' text-white '/></button>
        <button className='border-1 p-1 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>
        <Instagram className='text- text-white '/></button>
       <button className='border-1 p-1 global_bg hover:scale-110 rounded-lg mx-2 border-gray-600'>

        <Youtube className=' text-white '/></button>
      </div>
      <div className='flex justify-between'>
      <div className="relative hidden md:flex justify-center items-center  mx-4 focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <Search className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search "
                    className="h-9 border-none border-gray-300
                        bg-slate-700
                         px-10  focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                  />
            </div>
      <LanguageChanger/>
      </div>
      
    </div>
  )
}

export default FirstSection
