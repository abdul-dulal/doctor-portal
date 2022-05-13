import React from "react";

const InfoCard = ({ img, cartTitle, cartDes, bgClass }) => {
  return (
    <div>
      <div className={`card lg:card-side bg-accent shadow-xl ${bgClass}`}>
        <figure className="ml-5 pt-3">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white  ">
          <h2 className="card-title">{cartTitle}</h2>
          <p>{cartDes}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
