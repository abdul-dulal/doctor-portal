import React from "react";
import quote from "../assets/icons/quote.svg";
import avatar from "../assets/images/people1.png";
import avatar2 from "../assets/images/people2.png";
import avatar3 from "../assets/images/people3.png";
import Review from "./Review";
const Testmonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: avatar,
      location: "california",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: avatar2,
      location: "california",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: avatar3,
      location: "california",
    },
  ];
  return (
    <div className="my-28">
      <div className="flex justify-between">
        <div className=" ">
          <h1 className="text-xl text text-primary font-bold">Testimonial</h1>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} className=" w-24 lg:w-[192px] " alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testmonial;
