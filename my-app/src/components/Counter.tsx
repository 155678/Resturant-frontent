"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";



const data = [
  {
    id: 1,
    title: "alway food is hot delicuies",
    image:"/banner3.png",
  },
  {
    id: 2,
    title: "The orders is your ready",
    image:"/banner6.png"
  },
  {
    id: 3,
    title: "The best burger for with you",
    image:"/banner5.png",
  }
]

const Counter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="w-full flex-1 relative">
        <Image    src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-green-700 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-700 text-white rounded-md py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      
    </div>
  )
}

export default Counter