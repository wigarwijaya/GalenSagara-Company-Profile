import React from 'react'

const Project2021 = () => {
  return (
    <div>
      <table class="table-auto border-collapse border border-slate-400">
        <thead>
          <tr>
            <th rowSpan={2} className="border border-slate-300">
              Song
            </th>
            <th rowSpan={2} className="border border-slate-300">
              Song
            </th>
            <th rowSpan={2} className="border border-slate-300">
              Song
            </th>
            <th colSpan={2} className="border border-slate-300">
              Artist
            </th>
          </tr>
          <tr>
            <th className="border border-slate-300">Artist</th>
            <th className="border border-slate-300">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-slate-300">Malcolm Lockyer</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Witchy Woman</td>
            <td className="border border-slate-300">The Eagles</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
          </tr>
          <tr>
            <td className="border border-slate-300">Shining Star</td>
            <td className="border border-slate-300">Earth, Wind, and Fire</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
            <td className="border border-slate-300">2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Project2021