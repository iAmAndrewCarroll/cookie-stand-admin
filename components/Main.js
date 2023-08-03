import React from 'react';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';

export default function Main({ onFormSubmit, data, onDelete }) {
  return (
    <>
      <div className="container p-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">Create Cookie Stand</h2>
        <CreateForm onFormSubmit={onFormSubmit} />
      </div>

      {data.length > 0 ? (
        <ReportTable data={data} onDelete={onDelete} />
      ) : (
        <p className="mt-4 text-3xl text-center">No Cookie Stands Available...</p>
      )}
    </>
  );
}
