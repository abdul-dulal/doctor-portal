import React from "react";

const ServiceDeatils = ({ img, title, des }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-[116px] w-[114px] mt-[35px]" alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title block">{title}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default ServiceDeatils;
