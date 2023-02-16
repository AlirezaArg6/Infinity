import React from "react";
import { Articles } from "../components/Articles";
import { Help } from "../components/Help";
import { Landing } from "../components/Landing";

import { NewCourses } from "../components/NewCourses";
import { PopularCourses } from "../components/PopularCourses";
import { PresellCourses } from "../components/PresellCourses";

export const Index = () => {
  return (
    <>
      <Landing />
      <NewCourses />
      <Help />
      <PopularCourses />
      <PresellCourses />
      <Articles />
    </>
  );
};
