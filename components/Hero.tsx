"use client";
import React from "react";
import CustomButton from "./CustomButton";
import HeroImage from "../public/dream-job-image.jpeg";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <section className="p-10 pt-20 flex xl:flex-row flex-col gap-5 z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="text-5xl font-extrabold">
          Discover, and Apply to Jobs quickly and easily!
        </h1>
        <p className="pt-3 text-wrap text-3xl font-light">
          Effortless and Reliable job searches in real-time on Google, Indeed,
          Glassdoor, LinkedIn, and other platforms.
        </p>

        <CustomButton
          title="Explore Jobs"
          containerStyles="bg-green-500 text-white rounded-full mt-10 p-3 hover:bg-green-600"
          handleClick={handleScroll}
        />
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image
            src={HeroImage}
            alt="hero image"
            className="h-auto max-w-screen-md rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
