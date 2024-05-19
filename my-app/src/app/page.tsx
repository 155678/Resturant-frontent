import Image from "next/image";
import React from "react";
import Counter from "../components/Counter"
import Feature from "../components/Feature"
import Offer from "../components/Offer"

export default function Home() {
  return (
    <main>
      <Counter />
      <Feature />
      <Offer />
    </main>
  );
}
