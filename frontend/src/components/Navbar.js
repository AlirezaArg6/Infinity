import React, { useContext, useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const authContext = useContext(AuthContext);
  console.log(authContext);

  return (
    <>
      <nav className=" section-container relative ">
        <div className="relative flex justify-between items-center ">
          {/* right side */}
          <div className="realtive -">
            {/* logo */}
            {/* <img src="assets/images/logo.png" alt="" className="w-36 h-36" /> */}
            <ul className="hidden text-sm lg:flex">
              <li className="py-2 px-3 duration-300 hover:text-blue-500 dark:text-white">
                <a href="">صفحه اصلی</a>
              </li>
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
            {/* hamburger menu */}
            <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 px-2  rounded   lg:hidden">
              <GiHamburgerMenu
                onClick={() => {
                  setIsNavbarExpanded(true);
                  console.log("clicked");
                }}
              />
            </div>
          </div>
          {/* left side */}
          <div className="flex items-center">
            {/* cart */}
            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 px-2 ml-3 rounded lg:ml-0">
              <HiShoppingCart className="text-white text-xl" />
            </div>
            {/* login reister */}
            {authContext.isLoggedIn ? (
              <Link
                to={"/"}
                className="hidden bg-blue-500  text-white px-4 py-2 rounded lg:block lg:mx-3"
              >
                {authContext.userInfos.name}
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="hidden bg-blue-500  text-white px-4 py-2 rounded lg:block lg:mx-3"
              >
                ورود / ثبت نام
              </Link>
            )}
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-blue-500 px-2 ml-3 rounded text-white font-bold lg:hidden"
            >
              <AiOutlineUser />
            </a>
          </div>
        </div>
        {/* // navbar mobile */}
        <div
          className={`fixed top-0 bottom-0 right-0 left-0 shadow-lg bg-mainColor text-blue-500 text-center  text-sm py-12 px-3 duration-300 ${
            isNavbarExpanded ? "opacity-100 visible" : "opacity-0 invisible"
          }  `}
        >
          {/* close btn */}
          <div className="flex justify-end">
            <AiFillCloseCircle
              className="text-4xl "
              onClick={() => {
                setIsNavbarExpanded(false);
              }}
            />
          </div>
          {/* search */}
          <div className=" relative flex items-center justify-center bg-white mt-5 py-6 rounded">
            <input
              type="text"
              name=""
              id=""
              placeholder="جستجو کنید ..."
              className="absolute w-full outline-none px-5"
            />
            <AiOutlineSearch className="absolute left-5 text-2xl" />
          </div>
          <ul>
            <li className="py-6 px-3 duration-300 hover:text-blue-500 font-bold border-b  dark:text-white">
              <a href="">صفحه اصلی</a>
            </li>
            <li className="py-6 px-3 duration-300 hover:text-blue-500 font-bold border-b  dark:text-white">
              <a href="">آموزش پایتون</a>
            </li>
            <li className="py-6 px-3 duration-300 hover:text-blue-500 font-bold border-b  dark:text-white">
              <a href="">آموزش جاوا</a>
            </li>
            <li className="py-6 px-3 duration-300 hover:text-blue-500 font-bold border-b  dark:text-white">
              <a href="">آموزش npm</a>
            </li>
            <li className="py-6 px-3 duration-300 hover:text-blue-500 font-bold border-b  dark:text-white">
              <a href="">آموزش هوش مصنوعی</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
