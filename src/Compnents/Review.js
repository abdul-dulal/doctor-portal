import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            provident atque hic earum, quae repellat maiores quibusdam
            laudantium itaque beatae.
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
                <img src={review.img} />
              </div>
            </div>
            <div>
              <p>{review.name}</p>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
