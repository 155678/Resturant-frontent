import React from 'react'
import  Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-10 bg-green-700 md:h-10 p-4 lg:p-20 xl:p-8 text-white flex  items-center justify-between">
       <Link href="/" className="font-bold text-xl">Resturant</Link>
        <p>@ All call me  Resturant</p>
    </div>
  )
}

export default Footer