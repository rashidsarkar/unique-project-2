import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../src/MainLayaout/MainLayaout";
import Home from "../src/Pages/Home/Home";
import MySkills from "../src/Pages/MySkills/MySkills";
import AboutPage from "../src/Pages/AboutPage/AboutPage/AboutPage";
import WorksPage from "../src/Pages/Works/Works/WorksPage";
import ContactPage from "../src/Pages/Contact/Contact/ContactPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "skills",
        element: <MySkills />,
      },
      {
        path: "/aboutPage",
        element: <AboutPage />,
      },
      {
        path: "/worksPage",
        element: <WorksPage />,
      },
      {
        path: "/contactPage",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
