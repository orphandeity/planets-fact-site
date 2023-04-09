"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  // dropdown state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        nav
      </button>
      <nav
        data-state={isOpen}
        className="absolute top-full hidden flex-col gap-4 data-[state=true]:flex md:static md:flex md:flex-row"
      >
        <Link href={"/mercury"}>Mercury</Link>
        <Link href={"/venus"}>Venus</Link>
        <Link href={"/earth"}>Earth</Link>
        <Link href={"/mars"}>Mars</Link>
        <Link href={"/jupiter"}>Jupiter</Link>
        <Link href={"/saturn"}>Saturn</Link>
        <Link href={"/uranus"}>Uranus</Link>
        <Link href={"/neptune"}>Neptune</Link>
      </nav>
    </>
  );
}
