import React from "react";
import flouride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import ServiceDeatils from "./ServiceDeatils";
const Service = () => {
  return (
    <div className="py-28">
      <h2 className="text-center text-secondary font-bold text-xl">
        Our Services
      </h2>
      <h1 className="text-[#3A4256] text-center text-4xl">
        Services We Provide
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12  ">
        <ServiceDeatils
          img={flouride}
          title="Fluoride Treatment"
          des="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceDeatils
          img={cavity}
          title="Cavity Filling"
          des="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
        <ServiceDeatils
          img={whitening}
          title="Teeth Whitening"
          des="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        />
      </div>
    </div>
  );
};

export default Service;
