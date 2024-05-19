"use client";

import React from 'react';
import Image from "next/image"
import { useState } from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';


const links = [
  {id: 1, title: "Homepage" , url: "/"},
  {id: 2, title: "menu" , url: "/menu"},
  {id: 3, title: "Working Horus" , url: "/"},
  {id: 4, title: "Contact" , url: "/"}  
];
 
const Menubar = () => {
  const [open, setOpen] = useState(false);
  
  //TEMPORAY
  const user = false;
  return (
    <div>
      {!open ? (
        <Image  src="/open.png" alt="" width={25}  height={25}  onClick={() =>setOpen(true)}/>
      ) : (
      <Image  src="/close.png" alt="" width={25}  height={25}   onClick={() =>setOpen(false)} />
      )}
   {open &&( <div className="bg-green-700 text-white pt-3 pb-3 absolute left-0 top-24  w-full h-[col(100vh-6rem)]  flex  flex-col gap-8 items-center justify-center text-2xl z-10">
      {links.map((item) =>(
       <Link href={item.url} key={item.id} onClick={() =>setOpen(false)}>{item.title}</Link>
       ))}
      {!user ? (
       <Link href={"/login"}  onClick={() =>setOpen(false)}>login</Link>
       ) : ( 
       <Link href={"/orders"} onClick={() =>setOpen(false)}>Orders</Link>
       )}
       <Link href={"/cart"}  onClick={() =>setOpen(false)}>
         <CartIcon />
       </Link>
     </div>)}
    </div>
  )
}

export default Menubar
