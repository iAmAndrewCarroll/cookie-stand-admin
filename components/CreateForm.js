import React, { useState } from 'react';

export default function CreateForm({ onFormSubmit }) {
  const [location, setLocation] = useState('');
  const [minCust, setMinCust] = useState('');
  const [maxCust, setMaxCust] = useState('');
  const [avgCookie, setAvgCookie] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields (you can add validation logic here)

    // Create a new entry for the table with the form data
    const newEntry = {
      location,
      minCust: parseInt(minCust),
      maxCust: parseInt(maxCust),
      avgCookie: parseFloat(avgCookie),
    };

    // Call the onFormSubmit prop to pass the new entry data to the Main component
    onFormSubmit(newEntry);

    // Reset the form fields after submission
    setLocation('');
    setMinCust('');
    setMaxCust('');
    setAvgCookie('');
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-5">
      <div className="grid items-center grid-cols-1 sm:col-span-5">
        <label htmlFor="location" className="block mb-2" style={{ fontFamily: 'Arial' }}>Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="w-full px-4 py-2 form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="min_customers_per_hour" className="block w-full mb-2 text-center" style={{ fontFamily: 'Arial' }}>Minimum Customers per Hour</label>
        <input
          type="number"
          name="min_customers_per_hour"
          id="min_customers_per_hour"
          className="form-control"
          value={minCust}
          onChange={(e) => setMinCust(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="max_customers_per_hour" className="block w-full mb-2 text-center" style={{ fontFamily: 'Arial' }}>Maximum Customers per Hour</label>
        <input
          type="number"
          name="max_customers_per_hour"
          id="max_customers_per_hour"
          className="form-control"
          value={maxCust}
          onChange={(e) => setMaxCust(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:col-span-1">
        <label htmlFor="average_cookies_per_sale" className="block w-full mb-2 text-center" style={{ fontFamily: 'Arial' }}>Average Cookies per Sale</label>
        <input
          type="number"
          name="average_cookies_per_sale"
          id="average_cookies_per_sale"
          className="form-control"
          value={avgCookie}
          onChange={(e) => setAvgCookie(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center sm:col-span-2">
        <button type="submit" className="w-full px-4 py-2 btn btn-primary" style={{ fontFamily: 'Arial' }}>Create</button>
      </div>
    </form>
  );
}
