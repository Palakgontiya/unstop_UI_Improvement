import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/HomePage.jsx";
import MainJobContainer from "./components/jobs/MainJobContainer.jsx";
import Learn from "./components/pages/LearnPage.jsx";
import Mentorship from "./components/pages/MentorPage.jsx";
import PracticePage from "./components/pages/PracticePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/jobs",
        element: <MainJobContainer />,
      },
      {
        path: "/learn",
        element: <Learn />,
      },
      {
        path: "/mentorship",
        element: <Mentorship />,
      },
      {
        path: "/practice",
        element: <PracticePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
