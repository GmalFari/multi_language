"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const AboutSelectProps = () => {
  const t = useTranslations('about');
  const header = useTranslations('header')


  const about_props = [
    "aboutuni",
    'welcome',
    'policies',
    'vision',
    'logo',
    'plan',
    'structure',
    'admin',
    'offices',
    'accreditation',
    'events',
    'news',
    'jobs'
]
  const [isHidden, setIsHidden] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current &&
         !containerRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  const handleDropdown = (isHovering) => {
    setIsHidden(!isHovering);
  };


  const handleActiveChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="md">
      <div className="relative inline-block">
        <button className="md"
        onMouseEnter={() => handleDropdown(true)}
        onMouseLeave={() => handleDropdown(false)}>
          {t()} 
        </button>
        <nav
          className={`absolute z-20 list-none right-0 mt-2 py-2 w-48 bg-gray-200 rounded-md shadow-lg ${
            isHidden ? 'hidden' : 'block'
          }`}
          ref={containerRef}
        >
          {about_props.map((prop,index)=>(
            <li key={index}  className={`my-4 border-2 border-b-gray-300 ${activeIndex === 0 ? 'active' : ''}`}>
            <Link href="/" onClick={() => handleActiveChange(0)}>
              {t(`about.${prop}`)}
            </Link>
          </li>
          ))}
         
        </nav>
      </div>
    </div>
  );
};

export default AboutSelectProps;