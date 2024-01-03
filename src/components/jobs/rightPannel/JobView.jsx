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
        <div className="flex flex-col gap-6 justify-center items-center w-full text-gray-800 text-xl font-bold">
          No items Match your search
          <iframe src="https://lottie.host/embed/cba882e8-ff68-4e74-815c-11fec894d4ca/r76wXWTD0C.json"></iframe>
        </div>
      )}
    </div>
  );
};

export default JobView;
