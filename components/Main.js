import React from 'react';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function Main({ onFormSubmit, data }) {
  return (
    <>
      <div className="container p-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center" style={{ fontFamily: 'Arial' }}>
          Create Cookie Stand
        </h2>
        <CreateForm onFormSubmit={onFormSubmit} />
      </div>

      {/* Render the table only if there is data */}
      {data.length > 0 ? (
        <ReportTable data={data} />
      ) : (
        // Show the "No Cookie Stands Available..." message when there is no data
        <p className="mt-4 text-3xl text-center" style={{ fontFamily: 'Arial' }}>
          No Cookie Stands Available...
        </p>
      )}
    </>
  );
}
