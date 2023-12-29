import FilterChild from "./FilterChild";
import { TiCancel } from "react-icons/ti";

const Filter = () => {
  const filtersData = [
    {
      id: "lookingFor",
      name: "Looking for",
      selected: "Jobs",
      options: ["All", "Jobs", "Internships", "Part Time", "Full Time"],
      style:
        "bg-[#0073E6] px-2 text-white rounded-lg py-1 outline-none text-[12px] font-bold",
    },
    {
      id: "posted",
      name: "Posted",
      selected: "Recently",
      options: ["Recently"],
      style:
        " text-gray-700  bg-gray-100 px-2 border border-gray-600 rounded-lg py-1   outline-none text-[12px] font-bold",
    },
    {
      id: "eligibility",
      name: "Eligibility",
      selected: "Live",
      options: ["Open to All", "Graduate", "Post-Graduate", "Under-Graduate"],
      style:
        " text-gray-700  bg-gray-100 px-2 border border-gray-600 rounded-lg py-1 outline-none text-[12px] font-bold",
    },
    {
      id: "jobType",
      name: "Job-Type",
      selected: "Remote",
      options: ["In Office", "Hybrid/Remote", "On Field"],
      style:
        "text-gray-700  bg-gray-100 px-2 border border-gray-600 rounded-lg py-1   outline-none text-[12px] font-bold",
    },
    {
      id: "jobLocation",
      name: "Job-Location",
      selected: "Show All",
      options: [
        "Show All",
        "Bangalore",
        "Pune",
        "Mumbai",
        "Delhi",
        "Hyderabad",
        "Indore",
        "Bhopal",
        "Chennai",
        "Kolkata",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Chandigarh",
        "Kochi",
        "Guwahati",
        "Vadodara",
        "Surat",
        "Nagpur",
        "Coimbatore",
      ],
      style:
        " text-gray-700  bg-gray-100 px-2 border border-gray-600 rounded-lg py-1   outline-none text-[12px] font-bold",
    },
    {
      id: "skillsDomain",
      name: "Skills & Domain",
      selected: "IT/Software",
      options: [
        "Accounts",
        "Software Development",
        "IT Industry",
        "Human Resource",
      ],
      style:
        "text-gray-700 bg-gray-100 px-2 border border-gray-600 rounded-lg py-1   outline-none text-[12px] font-bold",
    },
  ];

  return (
    <div className="w-full flex bg-white px-3 rounded-xl py-2 ">
      <div className="w-[85%]  flex gap-3 items-center">
        <div className="flex justify-start pr-3 gap-4 h-full border-r-2 border-gray-600 ">
          {filtersData.slice(0, 2).map((filterData) => (
            <FilterChild
              key={filterData.name}
              selected={filterData.selected}
              label={filterData.name}
              options={filterData.options}
              style={filterData.style}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          {filtersData.slice(2).map((filterData) => (
            <FilterChild
              key={filterData.name}
              selected={filterData.selected}
              label={filterData.name}
              options={filterData.options}
              style={filterData.style}
            />
          ))}
          <div className="flex flex-col justify-end items-center h-[52px] ">
            <button className="  flex justify-center gap-1 items-center text-[12px] border border-red-500 bg-red-100 rounded-lg py-1 px-2 font-bold ">
              Clear Filters
              <TiCancel className="text-lg text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
