"use client";
import { useRouter,useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
export default function LanguageChanger({ locale }) {
  const t = useTranslations("header")
  const router = useRouter();
  const {pathname}= router; 
  const params = useParams();
  const [selectedLang,setSelectedLang] = useState(params.locale)
  console.log(params)
  const handleChange = (e) => {
    console.log(e)
    //  params.locale = e.target.value
     console.log(params.locale)
     setSelectedLang(e.target.value)
    router.push(`/${e.target.value}`);
  };
  return (
    <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-indigo-500" onChange={handleChange} value={selectedLang} >
      <option className=" py-2" value="en ">{t('languages.english')}</option>
      <option value="ar">{t('languages.arabic')}</option>
      <option value="tr">{t('languages.turkish')}</option>
    
    </select>
  );
}