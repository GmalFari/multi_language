import Image from 'next/image'
import CardImage from "../public/images/collage.jpeg"
const LatestNews = ({title}) => {
  return (
    <div className="rounded-xl h-full transition-all duration-300 ease-in-out overflow-y-hidden  bg-white relative z-0 transform hover:scale-105 w-[200px] sm:w-[250px]  shadow-lg ">
    <div className="flex w-full justify-center flex-col bg-white items-center ">
    <Image src={CardImage}  alt="Product Image"
     className="w-full  rounded-md" />
    <div className='rounded-xl w-full border-2 border-gray-100 shadow-lg'>
      <h2 className="text-lg ">{title}</h2>
    </div>
  </div>
  </div>
  )
}

export default LatestNews
