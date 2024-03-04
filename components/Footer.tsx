import React from "react";
import Link from "next/link";
import { PiBagFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-50 mt-5">
      <section className="text-black-200 p-10 max-w-[1440px] mx-auto">
        <div className="flex  justify-between gap-5">
          <Link href="/" className="flex gap-1 justify-center items-center">
            <PiBagFill className="text-3xl" />
            <div className="text-2xl pt-1">
              <span className="font-bold text-green-500">J</span>obs{" "}
              <span className="font-bold text-green-500">M</span>arket
              <br />
            </div>
          </Link>

          <div className="flex max-md:flex-col justify-between gap-5 pt-10">
            <p>
              Jobs Market 2024 <br /> All rights reserved &copy;
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
