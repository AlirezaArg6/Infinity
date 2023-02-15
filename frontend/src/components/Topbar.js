import React from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export const Topbar = () => {
  return (
    // topbar container
    <section
      className="invisible shadow-lg dark:bg-darkGrey lg:visible"
      id="topbar"
    >
      <div className=" flex justify-between items-center  text-sm p-4">
        {/* right side */}
        <div>
          <ul className="flex">
            <li className="py-2 px-4 duration-300 hover:text-teal dark:text-white">
              <a href="">آموزش پایتون</a>
            </li>
            <li className="py-2 px-4 duration-300 hover:text-teal dark:text-white">
              <a href="">آموزش جاوا</a>
            </li>
            <li className="py-2 px-4 duration-300 hover:text-teal dark:text-white">
              <a href="">آموزش npm</a>
            </li>
            <li className="py-2 px-4 duration-300 hover:text-teal dark:text-white">
              <a href="">آموزش هوش مصنوعی</a>
            </li>
          </ul>
        </div>
        {/* left side */}
        <div className="flex">
          {/* email */}
          <div className="flex items-center ml-4">
            <span className="dark:text-white">alirezaghafari0101@gmail</span>
            <AiOutlineMail className="text-teal text-2xl mr-1" />
          </div>
          {/* phone */}
          <div className="flex items-center">
            <span className="dark:text-white"> 0912987654321</span>
            <BiPhone className="text-teal text-2xl mr-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
