import React from "react";
import { HelpBox } from "./HelpBox";
import { SectionTitle } from "./SectionTitle";

export const Help = () => {
  return (
    <section id="new" className="mt-12">
      <div className="section-container">
        <SectionTitle title="ما چه کمکی بهتون میکنیم؟" />
        {/* help box container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <HelpBox />
          <HelpBox />
          <HelpBox />
          <HelpBox />
        </div>
      </div>
    </section>
  );
};
