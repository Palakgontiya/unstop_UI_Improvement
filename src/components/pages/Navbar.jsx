import { MdHomeFilled, MdOutlineWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full   flex justify-center items-center gap-10 bg-white border-b border-[#F1F5F7] p-2">
      <Link
        to="/"
        className="flex flex-col items-center justify-center text-sm font-bold text-[#315788]"
      >
        <MdHomeFilled size={26} />
        Home
      </Link>
      <Link
        to="/jobs"
        className="flex flex-col items-center justify-center text-sm font-bold text-[#315788]"
      >
        <MdOutlineWorkHistory size={26} />
        Jobs
      </Link>
    </div>
  );
};

export default Navbar;
