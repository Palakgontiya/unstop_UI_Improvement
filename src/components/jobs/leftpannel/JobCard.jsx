import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Button from "../../buttons/Buttons";
import { useState } from "react";

const JobCard = ({
  id,
  companyLocation,
  jobLocation,
  logo,
  companyName,
  title,
  impressions,
  deadline,
  experience,
  jobDescription,
  responsibilities,
  requirements,
  hashtags,
  setJobdes,
  isSelected,
  handleJobClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setJobdes({
      id,
      logo,
      deadline,
      impressions,
      companyLocation,
      companyName,
      title,
      jobLocation,
      jobDescription,
      responsibilities,
      requirements,
      hashtags,
      experience,
    });
    handleJobClick();
  };

  return (
    <div>
      <div
        className={`w-[24rem] py-2 px-3 border ${
          isSelected ? " border-blue-600" : "border-[#e7ebec]"
        } flex justify-between items-center rounded-xl bg-white `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="w-[5rem] h-[5rem] border border-[#F1F5F7] rounded-lg flex justify-center items-center">
          <img
            src={`/images/${logo}.png`}
            alt=""
            className="w-[95%] h-[95%] object-cover p-3"
          />
        </div>
        <div className="px-1 w-[80%] h-[5rem] flex flex-col justify-center items-center  rounded-lg">
          <div className=" w-full h-[2rem] flex justify-between items-center ">
            <p className="text-[#315788] text-[0.9rem] font-bold">{title}</p>
            {isHovered && (
              <button className="flex justify-center items-center border border-[#315788] rounded-xl px-2 h-[1.5rem] text-[#315788] font-bold text-[0.7rem]">
                Hide
              </button>
            )}
          </div>
          <div className="w-full flex justify-start items-center">
            <p className="flex justify-center items-center gap-1 font-semibold text-[0.7rem] text-[#315788]">
              <HiOutlineBuildingOffice2 className="text-sm" />
              {companyName}
            </p>
          </div>
          <div className=" flex justify-start items-center w-full gap-2 mt-3">
            <Button
              btnStyle={
                " gap-1 font-semibold text-[0.6rem] flex justify-center items-center border border-[#d6dadb] py-1 px-2 rounded-2xl text-[#315788]"
              }
              icon={<FaRegEye />}
              text={impressions}
            ></Button>
            <Button
              btnStyle={
                " gap-1 font-semibold text-[0.6rem] flex justify-center items-center border border-[#d6dadb] py-1 px-2 rounded-2xl text-[#315788]"
              }
              icon={<IoMdTime />}
              text={deadline}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
