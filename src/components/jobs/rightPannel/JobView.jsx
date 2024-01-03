
import JobViewCard from "./JobViewCard";


const JobView = ({ jobDetails }) => {
  

  return (
    <div className=" rounded-xl">
      {jobDetails ? (
        <JobViewCard
          id={jobDetails.id}
          logo={jobDetails.logo}
          deadline={jobDetails.deadline}
          impressions={jobDetails.impressions}
          companyLocation={jobDetails.companyLocation}
          companyName={jobDetails.companyName}
          title={jobDetails.title}
          jobLocation={jobDetails.jobLocation}
          experience={jobDetails.experience}
          jobDescription={jobDetails.jobDescription}
          responsibilities={jobDetails.responsibilities}
          requirements={jobDetails.requirements}
          hashtags={jobDetails.hashtags}
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default JobView;
