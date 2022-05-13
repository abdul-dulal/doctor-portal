import React from "react";
import Appoinment from "../Appoinment";
import Banner from "../Banner";
import Contact from "../Contact";
import Dental from "../Dental";
import Footer from "../Footer";
import Info from "../Info";
import Service from "../Service";
import Testmonial from "../Testmonial";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Service />
      <Dental />
      <Appoinment />
      <Testmonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
