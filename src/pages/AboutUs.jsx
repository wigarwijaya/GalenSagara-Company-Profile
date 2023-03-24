import React from "react";
import { PdfViewer } from "../components";
import { companyProfile, ISO1, ISO2, ISO3 } from "../assets";

const AboutUs = () => {
  return (
    <div className="container">
      <div class="flex-grow pl-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
          CATEGORY
        </h2>
        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
          The 400 Blows
        </h1>
        <p class="leading-relaxed mb-5">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
      </div>
      <h2 class="text-center text-xs title-font font-medium text-black mb-1">
          About Us PDF
        </h2>
      <PdfViewer pdf={companyProfile} />

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <iframe src={ISO1} className="h-80"></iframe>
        <iframe src={ISO2} className="h-80"></iframe>
        <iframe src={ISO3} className="h-80"></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
