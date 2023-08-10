import React from 'react';
import { hours } from '../data';

export default function ReportTable({ data, onDelete }) {
  const calculateTotalCookiesPerHour = (hourIndex) => {
    let total = 0;
    data.forEach((entry) => {
      total += (entry.avgCookie * (entry.maxCust + entry.minCust)) / 2;
    });
    return total.toFixed(1);
  };

  const calculateTotalCookiesPerLocation = (location) => {
    let total = 0;
    data.forEach((entry) => {
      if (entry.location === location) {
        total += (entry.avgCookie * (entry.maxCust + entry.minCust)) / 2;
      }
    });
    return total.toFixed(1);
  };

  return (
    <>
      {data.length > 0 && (
        <table className="w-1/2 mx-auto my-4 border">
          <thead>
            <tr>
              {hours.map((hour, index) => (
                <th key={index} className="font-bold">
                  {hour}
                </th>
              ))}
              <th className="font-bold">Totals</th>
              <th className="font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="font-bold">{entry.location}</td>
                {hours.slice(1).map((_, hourIndex) => (
                  <td key={hourIndex}>
                    {((entry.avgCookie * (entry.maxCust + entry.minCust)) / 2).toFixed(1)}
                  </td>
                ))}
                <td>{calculateTotalCookiesPerLocation(entry.location)}</td>
                <td>
                  <button onClick={() => onDelete(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <th>Totals</th>
              {hours.slice(1).map((_, hourIndex) => (
                <td key={hourIndex}>{calculateTotalCookiesPerHour(hourIndex)}</td>
              ))}
              <td>{calculateTotalCookiesPerHour()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}
