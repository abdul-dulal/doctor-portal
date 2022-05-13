import React from "react";
import InfoCard from "./InfoCard";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1   lg:grid-cols-3 gap-4 ">
      <InfoCard
        cartTitle="Opening Hours"
        cartDes="Lorem Ipsum is simply dummy text  "
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard
        bgClass="bg-accent"
        cartTitle="Visit Our Location"
        cartDes="Brooklyn, NY 10036, United States"
        img={marker}
      />
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        cartTitle="Contact Us Now"
        cartDes="+000 123 456789"
        img={phone}
      />
    </div>
  );
};

export default Info;
