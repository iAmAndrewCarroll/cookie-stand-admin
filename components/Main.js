import React, { useState } from 'react';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function Main() {
  const [tableData, setTableData] = useState([
    // Initial data (you can remove this if you want to start with an empty table)
    {
      location: 'Seattle',
      minCust: 23,
      maxCust: 65,
      avgCookie: 6.3,
    },
    {
      location: 'Tokyo',
      minCust: 3,
      maxCust: 24,
      avgCookie: 1.2,
    },
  ]);

  // Function to handle form submission and update the table data
  const handleFormSubmit = (newEntry) => {
    setTableData((prevData) => [...prevData, newEntry]);
  };

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-3xl text-center" style={{ fontFamily: 'Arial' }}>Create Cookie Stand</h2>
      {/* Pass the handleFormSubmit function as the onFormSubmit prop */}
      <CreateForm onFormSubmit={handleFormSubmit} />
      <ReportTable data={tableData} />
    </div>
  );
}
