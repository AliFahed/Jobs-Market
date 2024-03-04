import { JobsProps } from "@/types";
import React from "react";

interface JobDetailsProps {
  showButton: boolean;
  hideButton: () => void;
  job: JobsProps;
}

const JobDetails = ({ showButton, hideButton, job }: JobDetailsProps) => {
  return <section></section>;
};

export default JobDetails;
