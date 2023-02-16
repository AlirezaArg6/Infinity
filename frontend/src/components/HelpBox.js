import React from "react";
import { BiCopyright } from "react-icons/bi";

export const HelpBox = () => {
  return (
    <div className="rounded border-2 border-blue-500/60  p-5">
      <div className="flex items-center">
        <BiCopyright className="text-5xl ml-3" />
        <div>
          <p className="font-bold">دوره های اختصاصی</p>
          <p className="text-sm">با پشتیبانی و کیفیت بالا ارایه میده</p>
        </div>
      </div>
    </div>
  );
};
