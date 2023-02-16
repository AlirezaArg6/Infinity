import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h1 className="relative    text-2xl font-bold before:content-[''] before:absolute before:bg-blue-500/50 before:-bottom-1 before:left-0 before:right-0  before:h-1/2">
        {title}
      </h1>
    </div>
  );
};
