import React from 'react'
import { Facebook,Instagram,Youtube,Search,AlignJustify } from 'lucide-react'
import FirstSection from './FirstSection';
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
    <FirstSection/>
    <hr/>
    <header className='flex w-full h-24 justify-around items-center px-4 py-2 bg-gray-200'>
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center">
        {/* <Image src="#" alt="University Logo" className="h-8 mr-2" /> */}
        <h1 className="text-lg font-bold me-10">
          <Link href="/">{t('nav.uni_name')} </Link></h1>
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
        <button className='md:hidden' onClick={handleDropDwon}><AlignJustify/></button>
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
