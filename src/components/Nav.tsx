"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useWindow } from "@/lib/useWindow";
import clsx from "clsx";
import { Menu } from "lucide-react";
import MobileLinks from "./MobileLinks";

export default function Nav() {
  // dropdown state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // get browser window width for mobile styles
  const width = useWindow();
  if (!width) return <p>there was an error.</p>;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(["md:hidden", isOpen && "text-grayDark"])}
      >
        <Menu />
      </button>
      <nav
        data-state={isOpen}
        className="absolute top-full z-50 hidden w-full flex-col gap-4 bg-black data-[state=true]:flex md:static md:flex md:flex-row"
      >
        {width <= 375 ? (
          <MobileLinks />
        ) : (
          <>
            <Link href={"/mercury"}>Mercury</Link>
            <Link href={"/venus"}>Venus</Link>
            <Link href={"/earth"}>Earth</Link>
            <Link href={"/mars"}>Mars</Link>
            <Link href={"/jupiter"}>Jupiter</Link>
            <Link href={"/saturn"}>Saturn</Link>
            <Link href={"/uranus"}>Uranus</Link>
            <Link href={"/neptune"}>Neptune</Link>
          </>
        )}
      </nav>
    </>
  );
}
