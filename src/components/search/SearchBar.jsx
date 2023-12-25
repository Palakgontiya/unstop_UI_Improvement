import Button from "../buttons/Buttons";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="w-full h-[2.5rem] bg-gray-200 border-2 rounded-xl p-3 flex justify-between items-center ">
      <div className="flex items-center gap-1 h-full w-full">
        <Button
          icon={<IoSearch />}
          btnStyle={"text-gray-700 text-xl"}
        />
        <input
          type="text"
          placeholder="Search Your Job here..."
          className="w-[80%] h-full rounded-xl bg-transparent outline-none p-2 text-gray-700 font-semibold"
        />
      </div>
      {/* <button className="text-gray-700 font-semibold">Search</button> */}
    </div>
  );
};

export default SearchBar;
