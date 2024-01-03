import { IoMdTime } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import TagComp from "../../tags/TagComp";
import Button from "../../buttons/Buttons";

const JobViewCard = ({
  logo,
  companyName,
  title,
  jobLocation,
  experience,
  hashtags = [],
  companyLocation,
  deadline,
  impressions,
  jobDescription,
  responsibilities = [],
  requirements = [],
}) => {
  return (
    <div className="w-full flex flex-col gap-1 rounded-xl">
      <div className="w-full flex flex-col bg-white rounded-xl ">
        <div className=" w-full py-3 px-3  flex gap-4 rounded-xl  ">
          <div className="w-[6rem] h-[6rem] border border-[#F1F5F7] rounded-lg flex justify-center items-center">
            <img
              src={`/images/${logo}.png`}
              className="w-[95%] h-[95%] object-cover p-3"
            />
          </div>
          <div className="px-1 w-[80%] h-[6rem] flex flex-col justify-start items-center">
            <div className=" w-full flex justify-between items-center ">
              <p className="text-[#315788] font-bold text-xl">{title}</p>
            </div>
            <div className="w-full flex justify-start items-center">
              <Button
                btnStyle={
                  "flex justify-center items-center gap-1 font-semibold text-[1rem] text-[#315788]"
                }
                text={companyName}
                icon={<HiOutlineBuildingOffice2 />}
              ></Button>
            </div>
            <div className=" flex justify-start items-center w-full gap-2 mt-3">
              <Button
                btnStyle={
                  " gap-1 font-semibold text-[0.9rem] flex justify-center items-center border border-[#d6dadb] py-1 px-2 rounded-2xl text-[#315788]"
                }
                text={companyLocation}
                icon={<IoLocationOutline />}
              ></Button>
              <Button
                btnStyle={
                  " gap-1 font-semibold text-[0.9rem] flex justify-center items-center border border-[#d6dadb] py-1 px-2 rounded-2xl text-[#315788]"
                }
                text={jobLocation}
              >
                icon={<IoLocationOutline className="text-lg" />}
              </Button>
              <div className="flex justify-center items-center gap-1 font-semibold text-[0.9rem] border border-[#d6dadb] py-1 px-2 rounded-2xl text-[#315788]">
                <IoMdTime className="text-lg" />
                {experience}
              </div>
            </div>
          </div>
        </div>
        <div className=" px-3 flex gap-2 p-2">
          <TagComp hashtags={hashtags} />
        </div>
        <div className="border-b border-[#c3c6c7] w-full"></div>
        <div className=" px-3 flex justify-between py-3">
          <div className="flex justify-center items-center gap-2">
            <Button
              text={"Save this Job"}
              icon={<FaRegHeart />}
              btnStyle={
                "flex justify-center items-center gap-1 border border-[#315788] rounded-lg text-[#315788] text-[0.9rem] px-2 py-1 font-semibold cursor-pointer"
              }
            />
            <Button
              text={"Add to my calender"}
              icon={<FaRegCalendarAlt />}
              btnStyle={
                "flex justify-center items-center gap-1 border border-[#315788] rounded-lg text-[#315788] text-[0.9rem] px-2 py-1 font-semibold cursor-pointer"
              }
            />
          </div>
          <Button
            text={"Apply"}
            btnStyle={
              "flex justify-center items-center text-white rounded-lg bg-[#315788] text-[0.9rem] px-8 py-1 font-semibold cursor-pointer"
            }
          />
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 w-full flex items-center justify-start gap-6">
        <div className="flex justify-center items-center text-[#315788] gap-2">
          <div className="border border-[#c3c6c7] p-2 rounded-lg">
            <IoMdTime />
          </div>
          <div className="flex flex-col justify-center items-start font-semibold text-[0.8rem] ">
            <span>Deadline</span>
            <span>{deadline}</span>
          </div>
        </div>
        <div className="flex justify-center items-center text-[#315788] gap-2">
          <div className="border border-[#c3c6c7] p-2 rounded-lg">
            <FaRegEye />
          </div>
          <div className="flex flex-col justify-center items-start font-semibold text-[0.8rem] ">
            <span>Impressions</span>
            <span>{impressions}</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 rounded-xl flex flex-col gap-6">
        <div className="flex flex-col gap-2  w-full">
          <h1 className="text-[#315788] font-bold text-lg">Job Description</h1>
          <h2 className="text-[#315788] font-bold text-sm">{jobDescription}</h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#315788] font-bold text-sm">
            Responsibilities of the Candidate:
          </h2>
          <div className="w-full p-4">
            <ul className="list-disc">
              {Array.isArray(responsibilities) &&
                responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-[0.9rem] text-[#315788] font-900"
                  >
                    {responsibility}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#315788] font-bold text-sm">Requirements:</h2>
          <div className="w-full p-4">
            <ul className="list-disc">
              {requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="text-[0.9rem] text-[#315788] font-900"
                >
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewCard;
