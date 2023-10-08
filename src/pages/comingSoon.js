import React from 'react'
import coming from "../assets/coming.jpg"
import { FaArrowCircleRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
const ComingSoon = () => {
  return (
    <div className='container max-w-[1000px] flex flex-col justify-center items-center mx-auto h-screen space-y-6'>
        
        <Link href="/" className='flex items-center gap-3 cursor-pointer'>
            <FaArrowCircleRight size={30}/>
            <span className='text-2xl font-bold text-primary'>back</span>
        </Link>
        <Image src={coming} alt="coming" />
    </div>
  )
}

export default ComingSoon
