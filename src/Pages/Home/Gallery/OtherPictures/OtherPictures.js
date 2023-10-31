import React from "react";
import Picture from "../Picture/Picture";

const OtherPictures = ({ pictures }) => {
  return (
    <div className=" grid grid-cols-3">
      {pictures.map((picture) => {
        return <Picture key={picture.id} source={picture.src}></Picture>;
      })}
    </div>
  );
};

export default OtherPictures;
