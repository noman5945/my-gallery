import React from "react";
import AddIcon from "../../../SharedComponents/AddIcon/AddIcon";

const UploadImage = () => {
  return (
    <div className=" border border-solid-[1px] rounded-md h-[80px] w-[80px] lg:h-[296px] lg:w-[298px] bg-white ">
      <div className=" flex flex-col items-center justify-center mt-[40%]">
        <AddIcon></AddIcon>
        <button className=" btn btn-success btn-xs transition-all ease-in-out hover:bg-darkGreen   text-pest text-xs lg:text-base cursor-pointer rounded-md text-center m-auto">
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
