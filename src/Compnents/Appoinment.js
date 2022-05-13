import React from "react";
import doctor from "../assets/images/doctor.png";
import appoiment from "../assets/images/appointment.png";
import Button from "./Button";
const Appoinment = () => {
  return (
    <section
      style={{
        background: `url(${appoiment})`,
      }}
      className="grid sm:grid-cols-1 lg:grid-cols-2  gap-10 justify-center items-center"
    >
      <div>
        <img
          src={doctor}
          className="mt-[-130px] hidden lg:block w-[606] h-[636]"
          alt=""
        />
      </div>
      <div className="px-5">
        <h1 className="text-xl text-primary"> Appointment</h1>
        <h1 className="text-3xl text-white py-4">Make an appointment Today</h1>
        <p className="text-white py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          cum omnis? Nihil a voluptatibus in porro laborum nemo rem sit
          praesentium minus doloribus explicabo quod assumenda, beatae ipsum
          possimus rerum?
        </p>
        <Button className=""> get Started</Button>
      </div>
    </section>
  );
};

export default Appoinment;
