import { IoSearch } from "react-icons/io5";
import Button from "../buttons/Buttons";
import { useRef } from "react";

const SearchBar = ({ setSearchTerm, searchTerm, setSearchClick }) => {
  const inputElement = useRef(null);
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchClick((prev) => !prev);
    }
  };
  const onSearchClick = () => {
    setSearchClick((prev) => !prev);
  };
  return (
    <div className="h-[2.5rem] bg-gray-200 border-2 rounded-xl flex">
      <div className="flex items-center gap-1 flex-grow p-2">
        <Button icon={<IoSearch />} btnStyle={"text-gray-400 text-xl"} />
        <input
          type="text"
          ref={inputElement}
          value={searchTerm}
          placeholder="Search Your Job here..."
          className="flex-grow h-full rounded-xl bg-transparent outline-none p-2 text-gray-700 font-semibold"
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        onClick={onSearchClick}
        className="text-gray-700 font-semibold bg-white rounded-xl px-4 ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
