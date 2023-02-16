import React from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export const Topbar = () => {
  return (
    // topbar container
    <section className="hidden shadow-lg dark:bg-darkGrey lg:block" id="topbar">
      <div className="section-container flex justify-between items-center  text-sm ">
        {/* right side */}
        <div>
          <ul className="flex">
            <li className="py-2 px-3 duration-300 hover:text-blue-500 dark:text-white">
              <a href="">آموزش پایتون</a>
            </li>
            <li className="py-2 px-3 duration-300 hover:text-blue-500 dark:text-white">
              <a href="">آموزش جاوا</a>
            </li>
            <li className="py-2 px-3 duration-300 hover:text-blue-500 dark:text-white">
              <a href="">آموزش npm</a>
            </li>
            <li className="py-2 px-3 duration-300 hover:text-blue-500 dark:text-white">
              <a href="">آموزش هوش مصنوعی</a>
            </li>
          </ul>
        </div>
        {/* left side */}
        <div className="flex">
          {/* email */}
          <div className="flex items-center ml-4">
            <span className="dark:text-white">alirezaghafari0101@gmail</span>
            <AiOutlineMail className="text-blue-500 text-2xl mr-1" />
          </div>
          {/* phone */}
          <div className="flex items-center">
            <span className="dark:text-white"> 0912987654321</span>
            <BiPhone className="text-blue-500 text-2xl mr-1" />
          </div>
        </div>
      </div>
    </section>
  );
};
