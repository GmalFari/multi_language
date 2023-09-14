'use client';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import LanguageChanger from './components/LanguageCanger';
import HeaderComponent from './components/HeaderComponent';
import Image from 'next/image';
import HorizonalMulti from './components/HorizonalMulti';

import AboutSelectProps from './components/AboutSelectProps';
export default function Home() {
  const t = useTranslations();
   return (
    <div className={"relative z-10000 bg-gray-100 text-center  w-[100vw]  sm:px-10  flex flex-col items-center  text-black  "}>
      {/* <div className='flex-1'> */}
      <HeaderComponent/>
      {/*start latest news */}
      <AboutSelectProps/>
      <HorizonalMulti namespace={"news"}/>
      {/*end latest news */}
      {/* start Upcomming events */}
      <HorizonalMulti namespace={"events"} />
      {/* end Upcomming events */}

      {/* </div> */}
    </div>
  );
}