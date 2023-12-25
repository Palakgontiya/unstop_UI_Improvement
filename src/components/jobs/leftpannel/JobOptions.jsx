import JobCard from "./JobCard";

const JobOptions = () => {
  const jobData = [
    {
      id: "101",
      logo: "triveous",
      title: "React JS Freelancer",
      companyName: "Triveous",
      impressions: "126 Impressions",
      deadline: "19 Days Left",
    },
    {
      id: "102",
      logo: "globant",
      title: "Web UI Developer (React)",
      companyName: "Globant",
      impressions: "9,976 impressions",
      deadline: "7 Days Left ",
    },
    {
      id: "103",
      logo: "itworks",
      title: "React Native Developer",
      companyName: "ITWorks Infotech Pvt. Ltd",
      impressions: "9,880 impressions",
      deadline: "20 Days Left ",
    },
    {
      id: "104",
      logo: "hsbc",
      title: "Lead React Developer",
      companyName: "HSBC",
      impressions: "7687 impressions",
      deadline: "9 Days Left ",
    },
    {
      id: "105",
      logo: "togoteams",
      title: "React Native Developer",
      companyName: "Togo Teams",
      impressions: "4500 impressions",
      deadline: "12 Days Left ",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {jobData.map((job) => (
        <JobCard
          key={job.id}
          logo={job.logo}
          title={job.title}
          companyName={job.companyName}
          impressions = {job.impressions}
          deadline={job.deadline}
        />
      ))}
    </div>
  );
};

export default JobOptions;
