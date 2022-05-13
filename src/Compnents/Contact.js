import React from "react";
import appointment from "../assets/images/appointment.png";
import Button from "../../src/Compnents/Button";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="grid items-center justify-center py-12"
    >
      <div className="text-center">
        <h1 className="text-primary text-xl">Contact us</h1>
        <h1 className="text-2xl text-white"> Stay connected with us</h1>
      </div>
      <div>
        <form className="">
          <input
            type="text"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-[450px] my-4"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-full max-w-xs my-4"
          />
          <br />
          <textarea
            class="textarea w-full max-w-lg "
            placeholder="Message"
          ></textarea>
        </form>
      </div>
      <div className="block mx-auto my-3">
        <Button className=""> Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
