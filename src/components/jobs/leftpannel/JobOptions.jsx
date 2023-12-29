import { useState } from "react";
import JobCard from "./JobCard";

const JobOptions = ({ jobData, setJobdes }) => {
  const userInfo = localStorage.getItem("userInfo");

  const filteredJobs = jobData.filter((job) => {
    const UserInfoToBeCompared = userInfo.replace(/["']/g, "");
    const condition =
      job.segment.trim().toLowerCase() === UserInfoToBeCompared.toLowerCase() &&
      job.status === "LIVE";

    return condition;
  });

  const [selectedJobId, setSelectedJobId] = useState(filteredJobs[0].id);

 

  const handleJobClick = (id) => {
    setSelectedJobId(id);
  };

  return (
    <div className="flex flex-col gap-2">
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          logo={job.logo}
          title={job.title}
          companyName={job.companyName}
          impressions={job.impressions}
          deadline={job.deadline}
          setJobdes={setJobdes}
          companyLocation={job.companyLocation}
          jobLocation={job.jobLocation}
          experience={job.experience}
          jobDescription={job.jobDescription}
          responsibilities={job.responsibilities}
          requirements={job.requirements}
          hashtags={job.hashtags}
          isSelected={selectedJobId === job.id}
          handleJobClick={() => handleJobClick(job.id)}
        />
      ))}
    </div>
  );
};

export default JobOptions;
