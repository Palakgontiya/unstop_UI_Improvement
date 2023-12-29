import JobViewCard from "./JobViewCard";

const JobView = ({ jobDetails }) => {
  console.log(jobDetails);
  // const JD = [
  //   {
  //     id: "101",
  //     Status: "LIVE",
  //     segment: "technical",
  //     logo: "triveous",
  //     companyLocation: "Bangalore",
  //     title: "React JS Freelancer",
  //     companyName: "Triveous",
  //     jobLocation: "remote/Hybrid",
  //     experience: "1+ Year Exp",
  //     deadline: "21 Jan 2024",
  //     impressions: "2,089",
  //     hashtags: ["#Web Development", "#Programmimg"],
  //     jobDescription:
  //       "Gartner is hiring for the role of Email Marketing Associate!",
  //     responsibilities: [
  //       "Manage outbound communications to drive web traffic, boost engagement, and drive registrations via email. This would primarily include email asset creation and campaign setup, in addition to occasional setting up of segments using the right filter conditions in Eloqua.",
  //       "Help maintain the communications calendar to ensure the right balance of outreach and timely completion of the material.",
  //       "Contribute to various production tracking reports",
  //       "Collaborates with the various stakeholders to ensure appropriate audiences are reached effectively at the optimal times with the ideal message",
  //       "Conduct QA/QC on campaign assets.",
  //       "Help identify opportunities for business process improvement and new technologies.",
  //       "Be time flexible when needed to accommodate critical demand.",
  //       "Assist with email KPI analysis to determine email effectiveness.",
  //       "Maintain clear and eloquent written and verbal communication.",
  //     ],
  //     requirements: [
  //       "Bachelor’s degree in arts or sciences",
  //       "Experience with 0-1.5 years in Email Marketing",
  //       "Experience in working with global stakeholders",
  //       "Experience using Eloqua or similar Marketing Automation tool",
  //       "Experience with HTML is 'good to have'",
  //       "Excellent oral and written communication skills",
  //       "Strong attention to detail",
  //       "Exceptional client service ethic",
  //     ],
  //   },
  // ];

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
