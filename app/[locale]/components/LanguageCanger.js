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
    <select className="global_bg block appearance-none  w-full   border
     border-gray-300 text-white text-center px-2 sm:px-4 
      rounded-md leading-tight focus:outline-none focus:border-indigo-500" onChange={handleChange}
       value={selectedLang} >
      <option className=" py-2" value="en">{t('languages.english')}</option>
      <option lassName=" py-2" value="ar">{t('languages.arabic')}</option>
      <option lassName=" py-2" value="tr">{t('languages.turkish')}</option>
    
    </select>
  );
}