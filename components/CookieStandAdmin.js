import { useState } from "react";
import Header from "@/components/Header";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function CookieStandAdmin({ locations = 100 }) {
  return (
    <div>
      <Head />
      <Header />
      <Main />
      <Footer locations={locations} />
    </div>
  );
}
