import React from "react";

export const ArticleBox = () => {
  return (
    <div className="bg-white max-w-[430px] rounded overflow-hidden mx-auto">
      <div>
        <img
          src="./assets/images/article.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      {/* decription */}
      <div className="p-5 space-y-4">
        {/* title */}
        <h5 className="text-xl font-bold">مقاله ی فیک </h5>
        {/* desc */}
        <p className="text-sm">این توضیحات تستی برای پیش نویس مقاله هست</p>
        <a
          href="#"
          className="inline-block px-5 py-3 border-2  text-sm border-blue-500 text-blue-500 rounded duration-300 hover:bg-blue-500 hover:text-white"
        >
          بیشتر بخوانید
        </a>
      </div>
    </div>
  );
};
