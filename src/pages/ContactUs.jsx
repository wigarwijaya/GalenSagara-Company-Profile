import React, { useEffect } from "react";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container p-6 flex-wrap">
        <div className="flex flex-col mb-6">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-4/5 h-full bg-[#E3682B]"></div>
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
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
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
              <a className="text-[#E3682B] leading-relaxed" href="mailto:galensagara@gmail.com">
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
            Feedback
          </h2>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#E3682B] focus:ring-2 focus:ring-[#de936e] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              className="w-full bg-white rounded border border-gray-300 focus:border-[#E3682B] focus:ring-2 focus:ring-[#de936e] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#E3682B] focus:ring-2 focus:ring-[#de936e] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <a
            href=""
            className="w-full h-10 text-black hover:text-white hover:bg-black border-2 border-black mt-5 py-2 px-8 focus:outline-1 rounded text-sm text-center"
          >
            Submit
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
