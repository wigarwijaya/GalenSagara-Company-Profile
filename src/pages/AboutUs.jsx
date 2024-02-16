import React, { useEffect } from "react";
import { PdfViewer } from "../components";
import { GoPrimitiveDot } from "react-icons/go";
import { companyProfile, ISO1, ISO2, ISO3 } from "../assets";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation("common");
  const aboutUs = t("aboutUs", { returnObjects: true });
  console.log(aboutUs);


  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-col mb-6">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-primary"></div>
          </div>
        </div>
        {aboutUs.aboutData.map((item, index) => (
          <div className="flex-grow">
            <div className="h-full border-gray-200 border p-4 rounded-lg mb-4">
              <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1">
                {item.title}
              </h2>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                {item.companyName}
              </h1>
              <p className="leading-relaxed mb-5">{item.description}</p>
            </div>
          </div>
        ))}

        <p className="leading-relaxed text-lg">
          <span className="text-xl"></span>
          {t("aboutUs.text")}
        </p>
      </div>
      <div className="flex items-center flex-wrap pb-5 mb-5 border-b-2 border-gray-100 mt-auto w-full"></div>

      <div className="p-6">
        <h3 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
          Vision and Mission of PT. GALEN SAGARA PERKASA:
        </h3>
        {aboutUs.visionAndMissionData.map((item, index) => (
          <div className="flex flex-row justify-start mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
              <GoPrimitiveDot />
            </span>
            <p className="inline-block align-top leading-none text-gray-800">
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-wrap pb-5 mb-5 border-b-2 border-gray-100 mt-auto w-full"></div>
      <section className="text-gray-600 body-font">
        <div className="p-6">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
              Commissioners And Directors
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
              
            {aboutUs.CommissionersAndDirectorsData.map((item, index) => (
               <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
               <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                 <img
                   alt="team"
                   className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                   src="https://dummyimage.com/80x80"
                 />
                 <div className="flex-grow">
                   <h2 className="text-gray-900 title-font font-medium">
                     {item.name}
                   </h2>
                    <p className="text-gray-500">{item.position}</p>
                 </div>
               </div>
             </div>
            ))}

    

          </div>
        </div>
      </section>
      <div className="flex items-center flex-wrap pb-5 mb-5 border-b-2 border-gray-100 mt-auto w-full"></div>
      <div className="p-6">
        <div className="flex flex-col justify-center items-center p-6">
          <h2 className="text-center text-xs title-font font-medium text-black mb-1">
            Company Profile PDF
          </h2>
          <PdfViewer pdf={companyProfile} />
        </div>
        <div className="flex items-center flex-wrap pb-5 mb-5 border-b-2 border-gray-100 mt-auto w-full"></div>

        <div className="flex flex-col justify-center items-center p-6">
          <div>
            <h2 className="text-center text-xs title-font font-medium text-black mb-1">
              ISO CERTIFICATES
            </h2>
          </div>
          <div className="flex ss:flex-row flex-col ss:gap-8">
            <div className="py-2">
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                9001 : 2015 | INT/2210PA/3307
              </h1>
              <iframe src={ISO1} className="h-80"></iframe>
            </div>
            <div className="py-2">
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                14001 : 2015 | INT/2210PA/3308
              </h1>
              <iframe src={ISO2} className="h-80"></iframe>
            </div>
            <div className="py-2">
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                45001 : 2018 | INT/2210PA/3309
              </h1>
              <iframe src={ISO3} className="h-80"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
