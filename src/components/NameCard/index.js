import React from "react";
import Availability from "../Availability";

const NameCard = () => {
  return (
    <div className="max-w-md bg-white p-8 border-t-8 border-purple-dark shadow-md text-center rounded text-purple-darkest">
      <div className="text-3xl font-thin mb-4">
        <div>Hello. My name is</div>
        <span className="font-semibold text-black">Daniel Thompson</span>.
      </div>

      <div className="text-xl font-thin mb-4">
        I am a software developer currently located Houston, TX that
        occasionally writes about things I am reading or learning.
      </div>

      <Availability is_available={false} />
    </div>
  );
};

export default NameCard;
