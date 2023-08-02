import Head from 'next/head';

// New 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Form from '@/components/Form';

export default function Home() {
  const[location, SetLocation] = useState()
  
  function inputHandler(event) {
    event.preventDefault();
    setLocation
  }
  
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.0/tailwind.min.css" rel="stylesheet" />
      </Head>

      {/* Header */}
      <Header />

      <main className="container p-4 mx-auto">
        <h2 className="mb-4 text-3xl text-center">Create Cookie Stand</h2>

        {/* Form */}
        <Form />

        {/* This will eventually need to be the cookie stand table.  The table headers are Location, Min Cust Per Hour, Max Cust Per Hour, & Avg Cookies Per Sale. */}
        <p className="mt-10 text-xl text-center">Cookie Stand Table Coming Soon...</p>

      </main>

      <p className="mt-10 text-3xl text-center">Report Table Coming Soon...</p>

      {/* Footer */}
      <Footer />

    </div>
  );
}
