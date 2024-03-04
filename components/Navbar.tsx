import Link from "next/link";
import * as React from "react";
import { PiBagFill } from "react-icons/pi";
import { ModeToggle } from "./theme-mode-toggle";

const Navbar = () => {
  return (
    <header className="border-b">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-10 py-4">
        <Link href="/" className="flex gap-1 justify-center items-center">
          <PiBagFill className="text-3xl " />

          <div className="text-2xl pt-1">
            <span className="font-bold text-green-500">J</span>obs{" "}
            <span className="font-bold text-green-500">M</span>arket
          </div>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
