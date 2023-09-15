'use client';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import HeaderComponent from './components/HeaderComponent';
import HorizonalMulti from './components/HorizonalMulti';
import Footer from '@/components/Footer';
import UniversityStatistics from '@/components/universityStatics';
export default function Home() {
  const t = useTranslations();
   return (
    <div className={"relative z-10000 bg-gray-100 text-center  w-[100vw]  sm:px-10  flex flex-col items-center justify-conter text-black  "}>
      {/* <div className='flex-1'> */}
      <HeaderComponent/>
      {/*start latest news */}
      <HorizonalMulti namespace={"news"}/>
      {/*end latest news */}
      {/* start Upcomming events */}
      <HorizonalMulti namespace={"events"} />
      {/* end Upcomming events */}

      {/* </div> */}

      {/* start universityStatics */}
      <UniversityStatistics/>
       {/* end universityStatics */}

       {/* start footer  */}
       <Footer/>
        {/* end footer */}
      
    </div>
  );
}