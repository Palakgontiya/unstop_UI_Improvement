import { useEffect } from "react";

const Mentorship = () => {

  useEffect(() => {
    document.title = "mentorship";
  }, []);
  return <div>Mentorship page</div>;
};

export default Mentorship;
