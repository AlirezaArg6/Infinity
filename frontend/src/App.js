import React from "react";
import { Help } from "./components/Help";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { NewCourses } from "./components/NewCourses";
import { PopularCourses } from "./components/PopularCourses";
import { PresellCourses } from "./components/PresellCourses";
import { SectionTitle } from "./components/SectionTitle";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="">
      <Topbar />
      <Navbar />
      <Landing />
      <NewCourses />
      <Help />
      <PopularCourses />
      <PresellCourses />
    </div>
  );
}

export default App;
