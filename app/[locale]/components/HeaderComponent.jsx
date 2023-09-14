import React from 'react'
import { Facebook,Instagram,Youtube,Search } from 'lucide-react'
import LanguageChanger from './LanguageCanger'
const HeaderComponent = () => {
  return (
    <div className='flex w-full justify-around items-center px-4 py-2 bg-gray-200'>
      <div>
        logo
      </div>
      <div className='flex flex-1  justify-center items-center'>
      <button className='border-1 p-2 bg-gray-300 rounded-lg mx-4 border-gray-600'>
        <Facebook className='text- text-blue-500'/></button>
        <button className='border-1 p-2 bg-gray-300 rounded-lg mx-4 border-gray-600'>
        <Instagram className='text- text-red-500'/></button>
       <button className='border-1 p-2 bg-gray-300 rounded-lg mx-4 border-gray-600'>

        <Youtube className=' text-red-600'/></button>
      </div>
      <div className='flex justify-between'>
      <div className="relative mx-4 focus-visible:border-none">
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                  <Search className="w-4 h-4 text-gray-500 font-extralight pointer-events-none" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search "
                    className="h-14 border-none border-gray-300
                        bg-gray-100
                         px-10 py-2 focus:outline-none
                         focus:border-none
                     pr-10 rounded-md "
                  />
            </div>
      <LanguageChanger/>
      </div>
      
    </div>
  )
}

export default HeaderComponent
