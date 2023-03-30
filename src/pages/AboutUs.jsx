import React, { useEffect } from "react";
import { PdfViewer } from "../components";
import { GoPrimitiveDot } from "react-icons/go";
import { companyProfile, ISO1, ISO2, ISO3 } from "../assets";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-col mb-6">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-primary"></div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="h-full border-gray-200 border p-4 rounded-lg mb-4">
            <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1">
              COMPANY HISTORY:
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              PT. SAMADHI MANGKUBUMI
            </h1>
            <p className="leading-relaxed mb-5">
              Established 29 Mei 2013 at Jl. Situ Cipanunjang No. 09 Bandung -
              40265 Notary Public : Tahmid Tirtapradja, SH,Sp1
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <div className="h-full border-gray-200 border p-4 rounded-lg mb-5">
            <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1">
              BECOME:
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              PT. GALEN SAGARA PERKASA
            </h1>
            <p className="leading-relaxed">
              Established 5 Maret 2018 at Jl. R.A.A. Martanegara No. 56 Bandung
              - 40264 Telp. 022 – 73518996 Notary Public : Harry Susanto, SH
            </p>
          </div>
          <p className="leading-relaxed text-lg">
            <span className="text-xl">R</span>eferring to the Deed of
            Establishment of the Company No. 11 by Notary Tahmid Tirtapradja,
            SH, Sp1, PT. Samadhi Mangkubumi was established on May 29 2013 which
            is located at the head office, Jl. Situ Cipanunjang No. 09 Bandung.
            On March 5 2018, PT. Samadhi Mangkubumi, underwent a change in the
            articles of association, with a change in the name of the company,
            commissioners and directors, namely to become PT. GALEN SAGARA
            PERKASA which was legalized by Notary Harry Susanto, SH, Numbers 01
            and 02, on March 5 2018 and the latest Deed of Amendment Number 10,
            January 27 2021 with changes to the Commissioners and Directors In
            the day-to-day operational implementation of company management, it
            is managed by company management led by a President Director and
            Directors and assisted by various staff and Human Resources (HR)
            from various fields of expertise.
          </p>
        </div>
      </div>
      <div className="flex items-center flex-wrap pb-5 mb-5 border-b-2 border-gray-100 mt-auto w-full"></div>

      <div className="p-6">
        <h3 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
          Vision and Mission of PT. GALEN SAGARA PERKASA:
        </h3>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Creating jobs for human resources who are ready to face future
            challenges.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            To accommodate and unite the nation's human resources who are
            reliable and professional who have the spirit to be creative and
            work to serve the homeland and the nation in order to achieve a
            successful, bright and glorious future.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Participate in supporting National Development with the best
            results.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Always improve the Quality Standards of Work, both on a national and
            on a national scale international.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Client satisfaction and maximum service is our top priority.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Improving the creativity & quality of human resources to support the
            results of the work best.
          </p>
        </div>
        <div className="flex flex-row justify-start mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-primary">
            <GoPrimitiveDot />
          </span>
          <p className="inline-block align-top leading-none text-gray-800">
            Become the best consulting services company in the country and
            international.
          </p>
        </div>
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
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Taffan Muhammad Rizqi
                  </h2>
                  <p className="text-gray-500">Commissioner</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Arief Rusman Kamil, SE
                  </h2>
                  <p className="text-gray-500">President Director</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Deni Muhammad Rasyid, S.I.Kom
                  </h2>
                  <p class="text-gray-500">Director</p>
                </div>
              </div>
            </div>
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
