import React from "react";
import DeleteIcon from "../../../SharedComponents/DeleteIcon/DeleteIcon";

const MidSection = ({ number, deletefunc }) => {
  return (
    <div className=" flex flex-row justify-around items-center w-1/2 p-4 m-6">
      <div className=" text-2xl">
        {" "}
        <span className=" font-bold">{number.length}</span> Images Selected
      </div>
      <div data-theme="mytheme">
        {number.length >= 1 ? (
          <button className=" btn btn-error font-bold " onClick={deletefunc}>
            <DeleteIcon></DeleteIcon>
            Delete
          </button>
        ) : (
          <button className=" btn  btn-disabled font-bold ">
            <DeleteIcon></DeleteIcon>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default MidSection;
