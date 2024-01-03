import Navbar from "./components/pages/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-start bg-[#F6F8FA] relative h-[100dvh]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
