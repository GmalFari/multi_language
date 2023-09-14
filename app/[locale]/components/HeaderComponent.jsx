import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Youtube, Search, AlignJustify, GraduationCap } from 'lucide-react';
import FirstSection from './FirstSection';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const HeaderComponent = () => {
  const t = useTranslations('header');
  const [isHidden, setIsHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropDwon = () => {
    setIsHidden(!isHidden);
  };

  const handleActiveChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <FirstSection />
      <hr />
      <header className="flex w-full h-24 justify-around items-center px-4 py-2 bg-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex uni_style items-center">
              <Link className='uni_style' href="/">
            <h1 className="flex uni_style  text-lg font-bold me-10">
              <GraduationCap className='me-2 '/>
                {t('nav.uni_name')} 
            </h1>
                </Link>
          </div>
          <nav className={`hidden md:flex
           flex-1 justify-between items-center list-none bg-gray-200`}>
            <li className={`my-4 ${isActive && 'active'}`}>
              <Link href="/" onClick={() => handleActiveChange(0)}>
                {t('nav.about')}
              </Link>
            </li>
            <li className={`my-4 ${isActive && 'active'}`}>
              <Link href="/faculties" onClick={() => handleActiveChange(1)}>
                {t('nav.academic')}
              </Link>
            </li>
            <li className={`my-4 ${isActive && 'active'}`}>
              <Link href="/academic_affairs" onClick={() => handleActiveChange(2)}>
                {t('nav.research')}
              </Link>
            </li>
            <li className={`my-4 ${isActive && 'active'}`}>
              <Link href="/academic_affairs" onClick={() => handleActiveChange(3)}>
                {t('nav.student')}
              </Link>
            </li>
            <li>
              <Link href="/research_studies" onClick={() => handleActiveChange(4)}>
                {t('nav.uni_hospital')}
              </Link>
            </li>
          </nav>
          <div className="md:hidden">
            <button className="md:hidden" onClick={handleDropDwon}>
              <AlignJustify />
            </button>
            <nav
              className={`absolute z-20 list-none right-0 mt-8 py-2 w-48
               bg-gray-200 rounded-md md:hidden shadow-lg  ${
                isHidden ? 'hidden' : 'block'
              }`}
              ref={containerRef}
            >
              <li className={`my-4 border-2 border-b-gray-300 ${activeIndex === 0? 'active' : ''}`}>
                <Link href="/" onClick={() => handleActiveChange(0)}>
                  {t('nav.about')}
                </Link>
              </li>
              <li className={`my-4 border-2 border-b-gray-300 ${activeIndex === 1 ? 'active' : ''}`}>
                <Link href="/faculties" onClick={() => handleActiveChange(1)}>
                  {t('nav.academic')}
                </Link>
              </li>
              <li className={`my-4 border-2 border-b-gray-300${activeIndex ===  2? 'active' : ''}`}>
                <Link href="/academic_affairs" onClick={() => handleActiveChange(2)}>
                  {t('nav.research')}
                </Link>
              </li>
              <li className={`my-4 border-2 border-b-gray-300 ${activeIndex === 3 ? 'active' : ''}`}
              >
                <Link href="/academic_affairs" onClick={() => handleActiveChange(3)}>
                  {t('nav.student')}
                </Link>
              </li>
              <li  
                className={`my-4 ${activeIndex === 1 ? 'active' : ''}`} >
                <Link href="/research_studies" onClick={() => handleActiveChange(4)}>
                  {t('nav.uni_hospital')}
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;