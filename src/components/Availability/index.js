import React from "react";

const Availability = ({ is_available }) => {
  const alert = is_available
    ? {
        badge: "AVAILABLE",
        message: "I am currently available for remote work.",
        color: "green"
      }
    : {
        badge: "OCCUPIED",
        message: "Not currently available for remote work. Sorry!",
        color: "red"
      };

  return (
    <div className="text-center py-2 lg:px-2">
      <div className="p-2 bg-grey-lighter items-center text-red-lightest leading-none lg:rounded-full flex lg:inline-flex">
        <span
          className={`bg-${
            alert.color
          } flex rounded-full px-2 py-1 text-xs font-bold mr-3`}
        >
          {alert.badge}
        </span>
        <span className=" mr-4 text-left flex-auto text-purple-darkest">
          {alert.message}
        </span>
      </div>
    </div>
  );
};

export default Availability;
