import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { t } = useTranslation("common");
  return (
    <section className="relative">
      <div className="container px-5 py-5 mx-auto flex ss:flex-nowrap flex-wrap">
        <div className="flex flex-col mb-6">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-4/5 h-full bg-primary"></div>
          </div>
        </div>
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 google-map"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.368740882221!2d107.6231335!3d-6.9412651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e87a42f01b4f%3A0x48ecc0db8849b778!2sJl.%20R.A.A.%20Marta%20Negara%20No.56%2C%20Turangga%2C%20Kec.%20Lengkong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040264!5e0!3m2!1sen!2sid!4v1645236956951!5m2!1sen!2sid"           
             style={{border:0}}

         ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="">Jl. Martanegara No. 56, Bandung</p>
              <h2 className="mt-1 title-font font-semibold text-gray-900 tracking-widest text-xs">
                OFFICE ADDRESS
              </h2>
              <p className="">Jl. Guntur Madu No. 6A, Bandung</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-primary underline leading-relaxed" href="mailto:galensagara@gmail.com">
                galensagara@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+62 8128 0807 385</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {t("feedback.title")}
          </h2>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
         {t("feedback.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
            {t("feedback.message")}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <a
            href=""
            className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black mt-5 py-2 px-8 focus:outline-1 rounded text-sm text-center"
          >
                 {t("feedback.submit")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
