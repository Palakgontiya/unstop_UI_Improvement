import { useState, useEffect, useMemo } from "react";
import Filter from "../filter/Filter";
import SearchBar from "../search/SearchBar";
import JobOptions from "./leftPannel/JobOptions";
import JobView from "../../components/jobs/rightPannel/JobView";

import ModalComp from "../modal/ModalComp";
import { MdEdit } from "react-icons/md";
import { jobData } from "../../mockData";
import JobViewCardPlaceholder from "./rightPannel/JobViewCardPlaceholder";

const MainJobContainer = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [jd, setJd] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    document.title = "jobs";
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      setIsPopupOpen(true);
    }
  }, []);

  const filteredJobData = useMemo(() => {
    if (!userInfo || (userInfo === "All" && !searchTerm)) {
      return jobData;
    }

    if (userInfo === "All" && searchTerm) {
      const result = jobData.filter((job) => {
        const {
          title = "",
          jobDescription = "",
          companyName = "",
          responsibilities = [],
          requirements = [],
          hashtags = [],
        } = job;

        const searchableFields = [
          title,
          jobDescription,
          companyName,
          responsibilities.join(" "),
          requirements.join(" "),
          hashtags.join(" "),
        ].join(" ");

        return searchableFields
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log("result", result);
      return result;
    }

    return jobData.filter((job) => {
      const UserInfoToBeCompared = userInfo.replace(/["']/g, "");
      const {
        title = "",
        jobDescription = "",
        companyName = "",
        responsibilities = [],
        requirements = [],
        hashtags = [],
      } = job;

      const searchableFields = [
        title,
        jobDescription,
        companyName,
        responsibilities.join(" "),
        requirements.join(" "),
        hashtags.join(" "),
      ].join(" ");
      if (!searchTerm) {
        return (
          job.segment.trim().toLowerCase() ===
            UserInfoToBeCompared.toLowerCase() && job.status === "LIVE"
        );
      } else {
        return (
          job.segment.trim().toLowerCase() ===
            UserInfoToBeCompared.toLowerCase() &&
          job.status === "LIVE" &&
          searchableFields
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        );
      }
    });
  }, [userInfo, searchClick]);

  const saveUserInfo = (info) => {
    localStorage.setItem("userInfo", JSON.stringify(info));
    setUserInfo(info);
    setIsPopupOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 w-full sm:w-full md:w-[95%] lg:w-[90%] xl:w-[88%] custom-scrollbar mb-4 ">
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#F6F8FA] w-full h-full flex flex-col gap-2">
          {userInfo ? (
            <div className="sticky top-0 bg-white p-2">
              <div className="w-full flex justify-between mt-2">
                <div className="flex-1">
                  <SearchBar
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                    setSearchClick={setSearchClick}
                  />
                </div>
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={() => setIsPopupOpen(true)}
                    className="inline-flex items-center bg-blue-100 text-blue-500 font-semibold py-1 px-4 rounded-full"
                  >
                    <span className="mr-2 text-xs">
                      Smart Search Preference:{" "}
                      {localStorage.getItem("userInfo")}
                    </span>
                    <div className="focus:outline-none">
                      <MdEdit />
                    </div>
                  </button>
                </div>
              </div>
              <Filter />
            </div>
          ) : (
            <div className="text-center mt-8 text-gray-500">
              <JobViewCardPlaceholder />
            </div>
          )}

          {userInfo && (
            <div className="w-full flex flex-col sm:flex-row gap-2 my-2 ">
              {userInfo && (
                <div
                  className="left-area  custom-scrollbar pr-1"
                  style={{ height: "76dvh" }}
                >
                  <JobOptions jobData={filteredJobData} setJobdes={setJd} />
                </div>
              )}

              <div
                className="right-area  flex-1 custom-scrollbar pr-1"
                style={{ height: "76dvh" }}
              >
                <JobView
                  jobDetails={
                    jd || (filteredJobData.length > 0 && filteredJobData[0])
                  }
                />
              </div>
            </div>
          )}

          {isPopupOpen && (
            <div className="w-full h-[80vh] flex justify-center mt-4">
              <ModalComp saveUserInfo={saveUserInfo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainJobContainer;
