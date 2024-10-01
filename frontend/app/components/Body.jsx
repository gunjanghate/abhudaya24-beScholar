import React from 'react'
import Slider from './Slider'
import Image from 'next/image'
import Link from 'next/link'
import Scholarships from './Scholarships'

import ChatbotSidebar from './ChatBot'
const Body = () => {
  return (
    <div className='body min-h-screen'>
        <div className="slider px-5 flex flex-col md:flex-row lg:flex-row justify-centre items-center gap-0">
            <div className="adhaar-info flex flex-col bg-orange-200 w-60 justify-center items-center">
                <div className="adhaar-up">
                   <Image
                   src={"https://drive.google.com/uc?export=view&id=1uhPN3lSvpXOc6o34vn5pj2mpWhchmEJn"}
                   width={200}
                   height={200}
                   /> 
                </div>
                <div className="adhaar-down text-center">
                    <Link href="/pages/adhar-guide">
                    Guidelines for Aadhaar linking to bank account
                    </Link>
                    </div>
            </div>
            <div className="slider-main sticky left-32 top-20 w-3/4">
                <Slider/>
                   </div>
        </div>
            <div className="chat-icon fixed top-40 right-0 text-4xl ">
            <ChatbotSidebar/>
            </div>       
        <div className="scholarship flex flx-col pl-32">
            <Scholarships />
        </div>
    </div>
  )
}

export default Body