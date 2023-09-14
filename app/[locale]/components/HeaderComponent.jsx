import React from 'react'
import { Facebook,Instagram,Youtube,Search,AlignJustify } from 'lucide-react'
import LanguageChanger from './LanguageCanger'
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
const HeaderComponent = () => {
    const t = useTranslations('header')
    const [isHidden,setIsHidden]=useState(true)
    const handleDropDwon=()=>{
        setIsHidden(!isHidden)
    }
  return (
    <>
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
      <div className="relative hidden md:block mx-4 focus-visible:border-none">
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
    <hr/>
    <header className='flex w-full h-24 justify-around items-center px-4 py-2 bg-gray-200'>
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center">
        {/* <Image src="#" alt="University Logo" className="h-8 mr-2" /> */}
        <h1 className="text-lg font-bold me-10">{t('nav.uni_name')}</h1>
      </div>
      <nav className={` hidden md:flex flex-1 justify-between items-center  list-none 
         bg-gray-200    

        `}>
       
          <li className="my-4"><Link href="/">{t('nav.about')}</Link></li>
          <li className="my-4"><Link href="/faculties">{t('nav.academic')}</Link></li>
          <li className="my-4"><Link href="/academic_affairs">{t('nav.research')}</Link></li>
          <li className="my-4"><Link href="/academic_affairs">{t('nav.student')}</Link></li>

          <li><Link href="/research_studies">{t('nav.uni_hospital')}</Link></li>
      </nav>
        <div className='md:hidden'>
        <button className='md:hidden' onClick={handleDropDwon}></button>
      <nav className={`absolute  list-none right-0 mt-8
       py-2 w-48 bg-gray-200 rounded-md  md:hidden shadow-lg z-1000 
            ${isHidden  ?'block':'hidden'}
        `}>
       
          <li className="my-4 border-2 border-b-gray-300"><Link href="/">{t('nav.about')}</Link></li>
          <li className="my-4 border-2 border-b-gray-300"><Link href="/faculties">{t('nav.academic')}</Link></li>
          <li className="my-4 border-2 border-b-gray-300">
              <Link href="/academic_affairs">{t('nav.research')}</Link></li>
          <li className="my-4 border-2 border-b-gray-300"><Link href="/academic_affairs">{t('nav.student')}
          </Link></li>

          <li><Link href="/research_studies">{t('nav.uni_hospital')}</Link></li>
        
      </nav>
        </div>
    </div>
  </header>
  
    </>
  )
}

export default HeaderComponent
