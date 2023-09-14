import React from 'react'
import ImageCard from "../../public/images/image2.png"
import Image from 'next/image'
import { ShoppingCart,Share2 } from 'lucide-react'
import { Button } from '../ui/button'
import { bruno_ace } from '@/app/fonts'

const HorizonalCard = () => {

  let product_desc = Product_text.split(" ");
  console.log(product_desc.length)
  
  return (
    <div>
      <div className='rounded-xl 
       p-4  bg-white
         mx-2 
         flex w-screen
         min-w-screen
         max-w-screen
          sm:min-w-[500px]
           sm:max-w-[500px]
            border-1 
            border-gray-500
             h-60
             md:h-72
              shadow-lg 
              transform 
              transition-all duration-500
              
        
              hover:scale-110
              static z-20
              
              
              '>
      <Image className=' rounded-2xl max-w-full h-full min-h-full w-4/12' src={ImageCard} alt=""/>
      <div className=' w-8/12 ml-4'>
      <h2 className='text-first-dark-color text-left text-xl mb-2'>Blue Tealish Chair</h2>
      <p className='text-left hidden md:block leading-tight text-xs font-light
       text-gray-600'> 
       {/* large screen */}
       {product_desc.length >= 40?product_desc.slice(0,40).join(" "):product_desc.join(" ")}
      </p>
      {/* small screen  */}
      <p className='text-left block md:hidden leading-tight text-xs font-light
       text-gray-600'> 
       {product_desc.length >= 25?product_desc.slice(0,20).join(" "):product_desc}
      </p>
      <div className='flex justify-between items-center mt-2 md:mt-4'>
        <Button className=' rounded-full  bg-gray-200 ' variant={"ghost"} size={"icon"}>
          <Share2 className='h-4 w-4 md:h-6 md:w-6 text-gray-500'/></Button>
        <Button style={{
          background:'rgba(113, 73, 227, 0.10'
        }}
            variant={"ghost"} className='rounded-3xl text-primary-first-color'>
              <ShoppingCart className='h-4 w-4 md:h-6 md:w-6 mr-2 text-primary-first-color '/> Add to cart</Button>
      </div>
      <div className='mt-4 mb-4 text-right text-xl md:text-3xl font-bold text-primary-second-color'>
        <span className={bruno_ace.className}>CTS </span>
        <span>4100</span>
      </div>
      </div>
    </div>
    </div>
    
  )
}

export default HorizonalCard
