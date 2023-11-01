import React from "react";

const MidSection = ({ number }) => {
  return (
    <div className=" flex flex-row justify-around items-center w-1/2 p-4 m-6">
      <div className=" text-2xl">
        {" "}
        <span className=" font-bold">{number.length}</span> Images Selected
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default MidSection;
