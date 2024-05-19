import React from 'react'
import { MdFastfood } from "react-icons/md";


const Nav = () => {
  return (
  <main className="h-10 flex items-center justify-between bg-green-700 p-2 px-4">
    <MdFastfood  className="text-white text-xl"/>
    <div className="text-center text-white  font-bold ">
        Your Food Is Ready
    </div>
    <MdFastfood className="text-white text-xl"/>
  </main>
  )
}

export default Nav