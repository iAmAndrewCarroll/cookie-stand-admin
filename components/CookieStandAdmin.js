import React, { useState } from 'react';
import { hours } from './data'; // Make sure to import 'hours' correctly

import Header from './Header';
import Head from './Head';
import Footer from './Footer';
import Main from './Main';

export default function CookieStandAdmin() {
  const [cookieStandData, setCookieStandData] = useState([]);

  const handleFormSubmit = (formData) => {
    setCookieStandData([...cookieStandData, formData]);
  };

  return (
    <div>
      <Head />
      <Header />
      <Main onFormSubmit={handleFormSubmit} data={cookieStandData} />
      <Footer locations={cookieStandData.length} />
    </div>
  );
}
