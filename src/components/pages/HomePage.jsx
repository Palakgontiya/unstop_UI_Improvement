import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    document.title = "Unstop: home";
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      Hello i am Home page
      <Navigate to={"/jobs"} />
    </div>
  );
};

export default Homepage;
