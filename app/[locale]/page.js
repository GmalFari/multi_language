'use client';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import LanguageChanger from './components/LanguageCanger';
import HeaderComponent from './components/HeaderComponent';
export default function Home() {
  const t = useTranslations('header');

  const userName = 'Jamal Farea';
  return (
    <div className={"bg-gray-100 text-center w-[100vw]  px-10  flex flex-col items-center  text-black h-[100vh] "}>
      {/* <div className='flex-1'> */}
      <HeaderComponent/>
      <h1>{t('selectedLang')}</h1>
      <LanguageChanger/>
      {/* </div> */}
    </div>
  );
}