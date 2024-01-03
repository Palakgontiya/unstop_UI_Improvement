import { MdOutlineWorkHistory } from "react-icons/md";
import { IoHomeOutline, IoAtCircleOutline } from "react-icons/io5";
import { BiBookReader } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%]  flex justify-center items-center gap-10 bg-white border-b border-[#F1F5F7] p-2">
     <div className="w-[85.6%]  flex justify-between items-center gap-10">
     <div>
        <img src="/images/unstoplogo.svg" className="w-[95px]" alt="" />
      </div>
      <div className="flex gap-10 justify-end items-center h-full w-[50%]">
        <NavLink
          to="/"
          className="flex flex-col items-center justify-center text-[12px] font-bold text-[#315788]"
          activeClassname="active"
        >
          <IoHomeOutline size={24} />
          Home
        </NavLink>
        <NavLink
          to="/learn"
          className="flex flex-col items-center justify-center text-[12px] font-bold text-[#315788]"
          activeClassname="active"
        >
          <BiBookReader size={24} />
          Learn
        </NavLink>
        <NavLink
          to="/mentorship"
          className="flex flex-col items-center justify-center text-[12px] font-bold text-[#315788]"
          activeClassname="active"
        >
          <HiOutlineLightBulb size={24} />
          Mentorship
        </NavLink>
        <NavLink
          to="/jobs"
          className="flex flex-col items-center justify-center text-[12px] font-bold text-[#315788]"
          activeClassname="active"
        >
          <MdOutlineWorkHistory size={24} />
          Jobs
        </NavLink>
        <NavLink
          to="/practice"
          className="flex flex-col items-center justify-center text-[12px] font-bold text-[#315788]"
          activeClassname="active"
        >
          <IoAtCircleOutline size={24} />
          Practice
        </NavLink>

        <button className="text-white bg-[#315788] text-sm font-bold border border-[#315788] rounded-3xl px-5 py-2 flex justify-center items-center">
          Login
        </button>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
