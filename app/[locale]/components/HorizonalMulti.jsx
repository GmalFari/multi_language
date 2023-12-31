import React from 'react'
import LatestNews from '@/components/latsetNews'
import { useTranslations } from 'next-intl'
const HorizonalMulti = ({namespace}) => {
  const t = useTranslations(`${namespace}`)
  const latestNewsProps = [t(`${namespace}.title`)]
  return (
    <div className='max-w-full  overflow-x-scroll mb-16'>
      <h1 className='font-bold  text-2xl my-4 '>{t(`${namespace}.header`)}</h1>
      <div className="w-full flex overflow-x-scroll overflow-y-hidden max-h-full ">
      {Array(3).fill().map((_, index) => (
        <div key={index} className='relateive z-5 mx-2'>          
          <LatestNews title={latestNewsProps} key={index}  />
        </div>
        ))}
      </div>
      <button className='rounded-xl mt-12 style_btn font-bold text-white px-8 py-2'>read more</button>
     </div>
  )
}

export default HorizonalMulti
