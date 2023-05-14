import React from 'react'
import project2020 from "../constants/project2020";

const Project2020 = () => {
  return (
    <div className="grid grid-cols-1 ss:grid-cols-3 ss:gap-4 gap-2">
      {project2020.map((item, index) => {
        return (
          <div key={index} className="border-gray-200 border p-4 rounded-lg">
            <h2 className="ss:text-2xl text-xl font-medium text-gray-900 title-font">
              {`${item.no} | ${item.location}`}
            </h2>
            <h3 className="text-md font-light text-black title-font mb-2">
              {item.subField}
            </h3>
            <p class="leading-relaxed">
              {item.field}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Project2020