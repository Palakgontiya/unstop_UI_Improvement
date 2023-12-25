import { useState, useEffect } from "react";
import Filter from "../filter/Filter";
import SearchBar from "../search/SearchBar";
import JobOptions from "./leftpannel/JobOptions";
import JobView from "./rightPannel/JobView";

import ModalComp from "../modal/ModalComp";

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
    <div className="bg-[#F6F8FA] w-full h-full flex flex-col justify-center items-center gap-2 ">
      {userInfo && (
        <>
          <div className="w-[85%] flex justify-start mt-3">
            <SearchBar />
          </div>
          <Filter />

          <div className="w-[85%] flex justify-between gap-4 ">
            <JobOptions />
            <JobView />
          </div>
        </>
      )}
      {isPopupOpen && (<div className="w-full  h-screen flex justify-center mt-4">
        <ModalComp saveUserInfo={saveUserInfo} />
      </div>)}
    </div>
  );
};

export default MainJobContainer;
