import React from "react";
import { HiShoppingCart } from "react-icons/hi";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* right side */}
      <div>
        {/* logo */}
        {/* <img src="assets/images/logo.png" alt="" className="w-36 h-36" /> */}
        <ul className="flex">
          <li className="py-2 px-4 duration-300 hover:text-teal dark:text-white">
            <a href="">صفحه اصلی</a>
          </li>
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
      <div className="flex items-center">
        {/* cart */}
        <div className="flex items-center justify-center w-10 h-10 bg-teal px-2 ml-3 rounded">
          <HiShoppingCart className="text-white text-xl" />
        </div>
        {/* login reister */}
        <a className="bg-teal  text-white px-4 py-2 rounded">ورود / ثبت نام</a>
      </div>
    </nav>
  );
};
