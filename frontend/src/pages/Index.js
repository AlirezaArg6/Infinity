import React from "react";
import { Articles } from "../components/Articles";
import { Footer } from "../components/Footer";
import { Help } from "../components/Help";
import { Landing } from "../components/Landing";
import { Navbar } from "../components/Navbar";

import { NewCourses } from "../components/NewCourses";
import { PopularCourses } from "../components/PopularCourses";
import { PresellCourses } from "../components/PresellCourses";
import { Topbar } from "../components/Topbar";

export const Index = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Landing />
      <NewCourses />
      <Help />
      <PopularCourses />
      <PresellCourses />
      <Articles />
      <Footer />
    </>
  );
};
