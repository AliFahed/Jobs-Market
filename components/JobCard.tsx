"use client";
import { JobsProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import JobDetails from "./JobDetails";

interface JobCardProps {
  job: JobsProps;
}

const JobCard = ({ job }: JobCardProps) => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    // Handle button click action
    console.log("Button clicked!");
  };

  const {
    employer_name,
    employer_logo,
    job_publisher,
    job_title,
    job_employment_type,
  } = job;

  return (
    <section
      className="mt-10 mb-10 relative p-6 justify-center items-start text-black-100 bg-primary-blue-100 rounded-3xl"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {/* Company Logo */}
      {employer_logo && (
        <div className="mb-4 w-full">
          <Image
            src={employer_logo}
            alt="Company Logo"
            className="object-contain"
            width={250}
            height={250}
            priority={false}
            quality={75}
          />
        </div>
      )}

      {/* Company Name */}
      <h2 className="text-3xl font-bold mb-2">{employer_name}</h2>

      {/* Job Details */}
      <div>
        <p className="mb-2">
          <span className="font-semibold">Position:</span> {job_title}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Job Type:</span> {job_employment_type}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Source:</span> {job_publisher}
        </p>
      </div>

      {/* Button */}
      <div className={`absolute w-full z-10 ${showButton ? "flex" : "hidden"}`}>
        <button
          type="button"
          className="rounded-full bg-green-500 w-full py-2 text-black text-lg font-bold"
          onClick={handleClick}
        >
          More Info
        </button>
      </div>

      <JobDetails
        showButton={showButton}
        hideButton={() => setShowButton(false)}
        job={job}
      />
    </section>
  );
};

export default JobCard;
