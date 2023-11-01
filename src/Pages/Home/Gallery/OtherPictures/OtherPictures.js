import React from "react";
import Picture from "../Picture/Picture";

const OtherPictures = ({ pictures, dragfunction, dragItem, dragOver }) => {
  return (
    <div className=" grid grid-cols-2 gap-2 h-1/2 w-1/2 lg:grid-cols-3 ">
      {pictures.map((picture, index) => {
        return (
          <Picture
            key={picture.id}
            dragfunc={dragfunction}
            index={index}
            source={picture.src}
            dragItem={dragItem}
            dragOver={dragOver}
          ></Picture>
        );
      })}
    </div>
  );
};

export default OtherPictures;
