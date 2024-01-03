import { useEffect } from "react";

const PracticePage = () => {
  useEffect(() => {
    document.title = "practice";
  }, []);
  return <div>Practice page</div>;
};

export default PracticePage;
