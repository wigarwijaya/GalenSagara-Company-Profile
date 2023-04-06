import React from 'react'
import project2022 from '../constants/project2022'

const Project2020 = () => {
  return (
    <div>
      <table class="table-auto w-full whitespace-no-wrap border-collapse border border-slate-400 text-xs">
        <thead>
          <tr>
            <th rowSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300">
              No.
            </th>
            <th rowSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300">
              Field of Work
            </th>
            <th rowSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300">
              Sub-Field
            </th>
            <th rowSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300">
              Location
            </th>
            <th colSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300  ss:table-cell hidden">
              Assignor
            </th>
            <th colSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">
              Contract
            </th>
            <th colSpan={2} className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">
              Completion
            </th>
          </tr>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Address</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Number/Date</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Project Value</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Contract</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-slate-300 ss:table-cell hidden">Handover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 px-4 py-3 text-center">1</td>
            <td className="border border-slate-300 px-4 py-3">
              Urban Drainage Planning for Bakti Jaya Village, Setu District
            </td>
            <td className="border border-slate-300 px-4 py-3 text-center">Water Civil Engineering Planning</td>
            <td className="border border-slate-300 px-4 py-3 text-center">South Tangerang</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
            <td className="border border-slate-300 px-4 py-3 text-center ss:table-cell hidden">2020</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  )
}

export default Project2020