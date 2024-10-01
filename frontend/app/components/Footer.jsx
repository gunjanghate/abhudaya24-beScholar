import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row bg-gray-200 shadow-md justify-center items-center shadow-black'> 
        <div className="foot-left">
        <Image
          src="https://drive.google.com/uc?export=download&id=1Mw0EcZHPZRRmK6SPwtBjMTNqYlaizVmL"
          width={80}
          height={80}
          />
        </div>
        <div className="foot-right text-md font-light flex flex-col lg:flex-row md:flex-row gap-2">
        Ⓒ Copyright - beScholar 2024 |
        <div className="goto-footer text-sm flex gap-2 mt-1">
            <Link href="/pages/homepage">Go to Home |</Link>
            <Link href="/pages/help">Go to Help |</Link>
            <Link href="/pages/contact">Go to Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Footer