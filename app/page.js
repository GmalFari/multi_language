'use client'

import Link from 'next/link';
import  './globals.css';

export default function Home() {
  const userName = 'David';

  return (
    <div className='flex justify-center bg-white items-center w-[100vw] h-[100vh]'>
     <div className='bg-white text-black'>
     <h1>Welcome to my app, {userName}!</h1>
      <div className={"bg-white"}>
        <Link href="/products">Products</Link>
        <Link 
        href="/contact">Contact</Link>
      </div>
      </div>
    </div>
  );
}
