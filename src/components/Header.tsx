"use client";

import Link from "next/link";
import { useWindow } from "@/lib/useWindow";
import Nav from "./Nav";

export default function Header() {
  const width = useWindow();

  return (
    <header className="relative flex md:flex-col lg:flex-row justify-between items-center">
      <span className="text-xl font-bold md:text-3xl">the planets</span>
      <Nav />
    </header>
  );
}
