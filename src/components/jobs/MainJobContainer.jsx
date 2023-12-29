import { useState, useEffect, useMemo } from "react";
import Filter from "../filter/Filter";
import SearchBar from "../search/SearchBar";
import JobOptions from "./leftPannel/JobOptions";
import JobView from "../../components/jobs/rightPannel/JobView";

import ModalComp from "../modal/ModalComp";
import { MdEdit } from "react-icons/md";
import { jobData } from "../../mockData";

const MainJobContainer = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [jd, setJd] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      setIsPopupOpen(true);
    }
  }, []);

  const filteredJobData = useMemo(() => {
    if (!userInfo) {
      return [];
    }
    const filteredJobs = jobData.filter((job) => {
      const UserInfoToBeCompared = userInfo.replace(/["']/g, "");
      const condition =
        job.segment.trim().toLowerCase() ===
          UserInfoToBeCompared.toLowerCase() && job.status === "LIVE";

      return condition;
    });
    return filteredJobs;
  }, [userInfo]);

  const saveUserInfo = (info) => {
    localStorage.setItem("userInfo", JSON.stringify(info));
    setUserInfo(info);
    setIsPopupOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 w-full sm:w-[500px] md:w-[800px] lg:w-[1000px] xl:w-[1199px] ">
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#F6F8FA] w-full h-full flex flex-col gap-2   ">
          {userInfo && (
            <div className="">
              <div className="w-full flex justify-start mt-2 gap-2 my-2 ">
                <div className="flex-1 ">
                  <SearchBar />
                </div>
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className=" inline-flex items-center bg-blue-100 text-blue-500 font-semibold py-1 px-4 rounded-full"
                  >
                    <span className="mr-2 text-xs">
                      Smart Search Preference:{localStorage.getItem("userInfo")}
                    </span>
                    <button className="focus:outline-none">
                      <MdEdit />
                    </button>
                  </button>
                </div>
              </div>

              <Filter />
              <div className={`w-full flex gap-4 my-2 `}>
                <JobOptions jobData={filteredJobData} setJobdes={setJd} />
                <JobView jobDetails={jd || filteredJobData[0]} />
              </div>
            </div>
          )}
          {isPopupOpen && (
            <div className="w-full h-screen flex justify-center mt-4">
              <ModalComp saveUserInfo={saveUserInfo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainJobContainer;
