import React from "react";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { Topbar } from "./components/Topbar";

function App() {
  return (
    <div className="">
      <Topbar />
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
