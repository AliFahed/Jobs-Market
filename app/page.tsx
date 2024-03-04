import React from "react";
import { fetchJobs } from "@/utils";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";

const Home = async () => {
  const jobs = await fetchJobs();

  const isDataEmpty =
    !jobs || !Array.isArray(jobs.data) || jobs.data.length === 0;

  console.log(jobs);
  return (
    <>
      <Hero />

      {!isDataEmpty ? (
        <section>
          <div>
            {jobs.data?.map((job: any, index: number) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </section>
      ) : (
        <section>Oops, no current jobs.</section>
      )}
    </>
  );
};

export default Home;
