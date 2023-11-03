import React from "react";
import DeleteIcon from "../../../SharedComponents/DeleteIcon/DeleteIcon";

const MidSection = ({ number, deletefunc }) => {
  return (
    <div className=" flex flex-col h-[90px] w-1/2 p-1 m-6 bg-fade rounded-md  shadow-md">
      <div className="flex flex-row h-[100%] justify-around bg-white items-center">
        <div className=" text-xs lg:text-2xl">
          {" "}
          <span className=" font-bold">{number.length}</span> Images Selected
        </div>
        <div data-theme="mytheme">
          {number.length >= 1 ? (
            <button
              className=" btn btn-sm lg:btn-md btn-error text-sm lg:text-xl font-semibold "
              onClick={deletefunc}
            >
              <DeleteIcon></DeleteIcon>
              Delete
            </button>
          ) : (
            <button className=" btn btn-sm lg:btn-md text-sm lg:text-xl  btn-disabled font-semibold ">
              <DeleteIcon></DeleteIcon>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
