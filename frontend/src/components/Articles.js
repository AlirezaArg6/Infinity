import React from "react";
import { ArticleBox } from "./ArticleBox";
import { SectionTitle } from "./SectionTitle";

export const Articles = () => {
  return (
    <section id="new" className="mt-12">
      <div className="section-container">
        <SectionTitle title="جدیدترین مقالات" />
        {/* ARTICLES CONTAINER */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <ArticleBox />
          <ArticleBox />
          <ArticleBox />
        </div>
      </div>
    </section>
  );
};
