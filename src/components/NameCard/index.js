import React from "react";

const NameCard = () => {
  return (
    <div className="max-w-md bg-white p-8 border-t-8 border-purple-dark shadow-md text-center rounded text-grey-darkest">
      <div className="text-3xl font-thin mb-4">
        <div>Hello. My name is</div>
        <span className="font-semibold text-black">Daniel Thompson</span>.
      </div>

      <div className="text-xl text-grey-darkest font-thin mb-4">
        I am a software developer currently located Houston, TX that
        occasionally writes about things I am reading or learning.
      </div>

      <div className="text-center py-2 lg:px-2">
        <div className="p-2 bg-grey-lighter items-center text-red-lightest leading-none lg:rounded-full flex lg:inline-flex">
          <span className="flex rounded-full bg-red px-2 py-1 text-xs font-bold mr-3">
            OCCUPIED
          </span>
          <span className=" mr-4 text-left flex-auto text-grey-darkest">
            Not currently available for remote work. Sorry!
          </span>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
