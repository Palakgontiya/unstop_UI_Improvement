import { useState, useEffect } from "react";
import Filter from "../filter/Filter";
import SearchBar from "../search/SearchBar";
import JobOptions from "./leftPannel/JobOptions";
import JobView from "../../components/jobs/rightPannel/JobView";

import ModalComp from "../modal/ModalComp";
import { MdEdit } from "react-icons/md";

const MainJobContainer = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      // If userInfo is not available, open the popup
      setIsPopupOpen(true);
    }
  }, []);

  const saveUserInfo = (info) => {
    localStorage.setItem("userInfo", JSON.stringify(info));
    setUserInfo(info);
    setIsPopupOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <div className="flex justify-center items-center h-full">
        <div className="bg-[#F6F8FA] w-full h-full flex flex-col gap-2">
          {userInfo && (
            <div>
              <div className="w-full flex justify-start mt-3 gap-2 my-2">
                <div className="flex-1">
                  <div>
                    <SearchBar />
                  </div>
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

              <Filter  />
              <div
                className={`w-full flex gap-4 my-2 `}
              >
                <JobOptions />
                <JobView />
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
