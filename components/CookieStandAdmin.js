import React, { useState } from 'react';
import { hours } from '../Data';
import Header from './Header';
import Head from './Head';
import Footer from './Footer';
import Main from './Main';

export default function CookieStandAdmin() {
  const [cookieStandData, setCookieStandData] = useState([]);

  const handleFormSubmit = (formData) => {
    setCookieStandData([...cookieStandData, formData]);
  };

  const handleDeleteEntry = (index) => {
    const newData = [...cookieStandData];
    newData.splice(index, 1);
    setCookieStandData(newData);
  };

  return (
    <div>
      <Head />
      <Header />
      <Main onFormSubmit={handleFormSubmit} data={cookieStandData} onDelete={handleDeleteEntry} />
      <Footer locations={cookieStandData.length} />
    </div>
  );
}
