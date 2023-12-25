import { MdOutlineWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <div className="w-full  flex justify-center items-center bg-white border-b border-[#F1F5F7] p-1">
    <Link to="/jobs" className="flex flex-col items-center justify-center text-sm font-bold text-[#315788]"><MdOutlineWorkHistory/>Jobs</Link>
  </div>;
};

export default Navbar;
