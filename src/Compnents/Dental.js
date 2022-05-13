import React from "react";
import treatment from "../assets/images/treatment.png";
const Dental = () => {
  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-2 gap-10  my-28">
      <div>
        <img
          src={treatment}
          className="w-full h-[576px] object-center"
          alt=""
        />
      </div>
      <div>
        <h1>Exceptional Dental Care, on Your Terms</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary uppercase font-bold text-white  bg-gradient-to-r from-secondary to-primary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dental;
