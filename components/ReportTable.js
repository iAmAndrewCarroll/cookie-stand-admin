import React from 'react';
import { hours } from './data'; // Make sure to import 'hours' correctly

export default function Table({ data }) {
  const hours = Array.from({ length: 13 }, (_, index) => {
    if (index === 0) return 'Location';
    else if (index <= 6) return `${index + 5}am`;
    else return `${index - 7}pm`;
  });

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
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="font-bold">{entry.location}</td>
                {hours.slice(1).map((_, hourIndex) => (
                  <td key={hourIndex}>
                    {((entry.avgCookie * (entry.maxCust + entry.minCust)) / 2).toFixed(1)}
                  </td>
                ))}
                <td>{calculateTotalCookiesPerLocation(entry.location)}</td>
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
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}
