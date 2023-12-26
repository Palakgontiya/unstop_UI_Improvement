
import { IoSearch } from "react-icons/io5";
import Button from "../buttons/Buttons";

const SearchBar = () => {
  return (
    <div className="h-[2.5rem] bg-gray-200 border-2 rounded-xl flex">
      <div className="flex items-center gap-1 flex-grow p-2">
        <Button icon={<IoSearch />} btnStyle={"text-gray-400 text-xl"} />
        <input
          type="text"
          placeholder="Search Your Job here..."
          className="flex-grow h-full rounded-xl bg-transparent outline-none p-2 text-gray-700 font-semibold"
        />
      </div>
      <button className="text-gray-700 font-semibold bg-white rounded-xl px-4 ml-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
