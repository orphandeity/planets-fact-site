"use client";

import Link from "next/link";
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
        className={clsx(["pr-6 md:hidden", isOpen && "text-grayDark"])}
      >
        <Menu />
      </button>
      <nav
        data-state={isOpen}
        className="absolute top-full z-50 hidden min-h-screen w-full translate-y-1 flex-col gap-4 bg-black data-[state=true]:flex md:static md:flex md:min-h-fit md:max-w-[768px] md:-translate-y-1 md:flex-row md:justify-between md:px-10 lg:items-center lg:px-0"
      >
        {width <= 375 ? (
          <MobileLinks setIsOpen={setIsOpen} />
        ) : (
          <>
            <div className="relative flex items-center">
              <Link
                href={"/mercury"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Mercury
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-mercury lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/venus"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Venus
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-venus lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/earth"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Earth
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-earth lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/mars"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Mars
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-mars lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/jupiter"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Jupiter
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-jupiter lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/saturn"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Saturn
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-saturn lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/uranus"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Uranus
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-uranus lg:block" />
            </div>
            <div className="relative flex items-center">
              <Link
                href={"/neptune"}
                className="peer flex items-center justify-center text-[11px] font-bold uppercase leading-[25px] tracking-[1px] text-grayLight transition-colors md:h-[85px] lg:hover:text-white"
              >
                Neptune
              </Link>
              <div className="absolute top-0 hidden h-1 w-full translate-y-full peer-hover:bg-neptune lg:block" />
            </div>
          </>
        )}
      </nav>
    </>
  );
}
