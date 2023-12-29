import Navbar from "./components/pages/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F6F8FA] relative">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
