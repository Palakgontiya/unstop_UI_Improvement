import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobOptions = ({ jobData, setJobdes }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    setSelectedJobId(jobData[0]?.id);
  }, [jobData]);

  const handleJobClick = (id) => {
    setSelectedJobId(id);
  };

  return (
    <div className="flex flex-col gap-2">
      {jobData.map((job) => (
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
