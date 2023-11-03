import React from "react";

const MainPic = ({ source }) => {
  return (
    <div className=" rounded-md shadow-md m-5 p-1 bg-fade w-1/2 h-1/2">
      {source !== "undefined" ? (
        <img src={source} alt="featured"></img>
      ) : (
        <div className=" bg-white h-full w-full text-center">
          <p className=" font-bold text-base lg:text-4xl p-9">
            Upload an Image.The first image will be the featured one
          </p>
        </div>
      )}
    </div>
  );
};

export default MainPic;
