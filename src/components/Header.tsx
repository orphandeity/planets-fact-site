"use client";

import Link from "next/link";
import { useWindow } from "@/lib/useWindow";
import Nav from "./Nav";

export default function Header() {
  const width = useWindow();

  return (
    <header className="relative flex h-[68px] items-center justify-between border-b border-white/10 md:h-fit md:flex-col lg:flex-row lg:items-center lg:px-40">
      <span className="pl-6 font-antonio text-[28px] font-medium uppercase tracking-[-1.05px] md:mt-8 md:pl-0 md:text-3xl lg:mt-0">
        the planets
      </span>
      <Nav />
    </header>
  );
}
