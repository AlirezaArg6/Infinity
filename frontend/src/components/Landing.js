import React from "react";

export const Landing = () => {
  return (
    <section id="landing">
      <div className="section-container flex flex-col md:flex-row md:items-center">
        {/* riht side  */}
        <div className=" flex items-center justify-center  md:w-1/2 md:border-x md:border-[#c3c4c4]">
          <img
            src="./assets/images/landing.png"
            alt=""
            className="w-[400px] h-[400px]"
          />
        </div>
        {/* left side   */}
        <div className=" text-center mt-6 md:w-1/2 md:mt-0">
          <h2 className="font-bold text-2xl text-black">
            آکادمی آموزش برنامه نویس اینفینیتی
          </h2>
          <p className="mt-5">
            برنامه نویسی را سریع، آسان و پروژه محور یادبگیرید
          </p>
          <a
            href="#"
            className="inline-block text-white text-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-3 my-6 rounded shadow-lg duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            شروع کن
          </a>
          <p>اگه نمیدونی چه دوره ای برات مفیده</p>
          <p className="text-blue-500 text-sm mt-3">این مقاله رو بخون</p>
        </div>
      </div>
    </section>
  );
};
