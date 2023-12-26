import { useState } from "react";
import FilterModal from "../modal/FilterModal";

const FilterChild = ({ label, selected, style, options }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedfilter, setSelectedFilter] = useState(selected)

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="flex h-[60px] flex-col gap-1 justify-center items-start relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <label className="text-[0.8rem] font-semibold" htmlFor="">
          {label}
        </label>
        <button className={style}>{selectedfilter}</button>
        {isModalOpen && (
          <div className="absolute bg-gray-100 z-40  border border-gray-300 top-16 rounded-xl ">
            <FilterModal options={options} optionStyle={style} setIsModalOpen={setIsModalOpen} setSelectedFilter={setSelectedFilter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterChild;
