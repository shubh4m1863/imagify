import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      
      <img src={assets.logo} alt="Logo" width={150} />

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright @RCS.dev | All rights reserved.
      </p>

      <div className='flex gap-2.5'>
        <a
          href="https://www.instagram.com/shubh4mm_88/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={assets.instagram_icon}
            alt="Instagram"
            width={35}
            className="cursor-pointer hover:opacity-80"
          />
        </a>
      </div>

    </div>
  )
}

export default Footer
