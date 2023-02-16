import React from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BiLeftArrow } from "react-icons/bi";
import { FiArrowLeft, FiUsers } from "react-icons/fi";

export const CourseBox = () => {
  return (
    <div className="max-w-[420px] mx-auto  shadow-2xl rounded-lg overflow-hidden duration-300 hover:-translate-y-2">
      {/* img */}
      <div className="">
        <img
          src="./assets/images/bootstrap.webp"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* description */}
      <div className="p-3 space-y-4">
        {/* title */}
        <h5 className="font-bold ">دوره پروژه محور بوت استرپ</h5>
        {/* teacher and score  */}
        <div className="flex justify-between items-center">
          <span className="text-sm">مدرس دوره: علیرضا غفاری</span>
          <div className="flex">
            <img src="./assets/images/star_fill.svg" alt="" />
            <img src="./assets/images/star_fill.svg" alt="" />
            <img src="./assets/images/star_fill.svg" alt="" />
            <img src="./assets/images/star_fill.svg" alt="" />
            <img src="./assets/images/star_fill.svg" alt="" />
          </div>
        </div>
        {/* price and students  */}
        <div className="flex justify-between items-center font-iranSansWeb">
          <div className="flex">
            <FiUsers className="text-blue-500 font-bold text-xl" />
            423
          </div>
          <span className="">231.000تومان</span>
        </div>
        <div className="flex  items-center justify-center font-bold p-4 pb-2 border-t border-blue-500 text-blue-500">
          اطلاعات بیشتر
          <FiArrowLeft className="mr-2" />
        </div>
      </div>
    </div>
  );
};
