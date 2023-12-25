import FilterChild from "./FilterChild";

const Filter = () => {
  const filtersData = [
    {
      name: "Jobs",
      options: ["All", "Internships", "Part Time", "Full Time"],
      style:
        "bg-[#0073E6] text-white p-2 rounded-3xl outline-none text-[12px] font-bold",
    },
    {
      name: "Sort By",
      options: ["Salary High to Low"],
      style:
        "bg-[#F5F9FE] text-[#0073E6] p-2 rounded-3xl outline-none text-[12px] font-bold",
    },
    {
      name: "Status",
      options: ["Live", "Expired", "Closed", "Recent"],
      style:
        " text-[#1C4980] border border-[#1C4980] p-2 rounded-3xl outline-none text-[12px] font-bold",
    },
    {
      name: "Type",
      options: ["In Office", "Virtual", "On Field"],
      style:
        " text-[#1C4980] border border-[#1C4980] p-2 rounded-3xl outline-none text-[12px] font-bold",
    },
    {
      name: "Eligibility",
      options: ["Professional", "College Student"],
      style:
        " text-[#1C4980] border border-[#1C4980] p-2 rounded-3xl outline-none text-[12px] font-bold",
    },
    {
      name: "Category",
      options: [
        "Accounts",
        "Software Development",
        "IT Industry",
        "Human Resource",
      ],
      style:
        " text-[#1C4980] border border-[#1C4980] px-3 py-2 rounded-3xl outline-none text-[12px] font-bold",
    },
  ];

  return (
    <div className="w-full bg-white flex justify-center items-center py-2">
      <div className="w-[85%] flex justify-between items-center">
        <div className=" flex justify-center items-center gap-3">
          {filtersData.map((filterData) => (
            <FilterChild
              key={filterData.name}
              filter={filterData.name}
              options={filterData.options}
              style={filterData.style}
            />
          ))}
        </div>
        <div>
          <button className=" text-[#1C4980] border border-[#1C4980] px-3 py-2 rounded-3xl outline-none text-[12px] font-bold">
            Live Only
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
