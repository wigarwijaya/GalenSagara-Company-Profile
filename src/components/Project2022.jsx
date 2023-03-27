import React from "react";

const Project2022 = () => {
  return (
    <div>
      <table class="table-auto w-full whitespace-no-wrap border-collapse border border-slate-400 text-xs">
        <thead>
          <tr>
            <th rowSpan={2} className="border border-slate-300">
              No.
            </th>
            <th rowSpan={2} className="border border-slate-300">
              Field of Work
            </th>
            <th rowSpan={2} className="border border-slate-300">
              Sub-Field
            </th>
            <th rowSpan={2} className="border border-slate-300">
              Location
            </th>
            <th colSpan={2} className="border border-slate-300  ss:table-cell hidden">
              Assignor
            </th>
            <th colSpan={2} className="border border-slate-300 ss:table-cell hidden">
              Contract
            </th>
            <th colSpan={2} className="border border-slate-300 ss:table-cell hidden">
              Completion
            </th>
          </tr>
          <tr>
            <th className="border border-slate-300 ss:table-cell hidden">Name</th>
            <th className="border border-slate-300 ss:table-cell hidden">Address</th>
            <th className="border border-slate-300 ss:table-cell hidden">Number/Date</th>
            <th className="border border-slate-300 ss:table-cell hidden">Project Value</th>
            <th className="border border-slate-300 ss:table-cell hidden">Contract</th>
            <th className="border border-slate-300 ss:table-cell hidden">Handover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">1</td>
            <td className="border border-slate-300">
              Urban Drainage Planning for Bakti Jaya Village, Setu District
            </td>
            <td className="border border-slate-300 text-center">Water Civil Engineering Planning</td>
            <td className="border border-slate-300 text-center">South Tangerang</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
            <td className="border border-slate-300 text-center ss:table-cell hidden">2022</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default Project2022;
