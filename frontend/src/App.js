import React from "react";
import { useRoutes } from "react-router-dom";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import { Help } from "./components/Help";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { NewCourses } from "./components/NewCourses";
import { PopularCourses } from "./components/PopularCourses";
import { PresellCourses } from "./components/PresellCourses";
import { SectionTitle } from "./components/SectionTitle";
import { Topbar } from "./components/Topbar";

import { routes } from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <Navbar />
      {router}
      <Footer />
    </>
  );
}

export default App;
