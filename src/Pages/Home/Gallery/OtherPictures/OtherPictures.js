import React from "react";
import Picture from "../Picture/Picture";

const OtherPictures = ({
  pictures,
  dragfunction,
  dragItem,
  dragOver,
  getID,
}) => {
  return (
    <div className=" grid grid-cols-2 gap-3 h-1/2 w-1/2 lg:grid-cols-3 ">
      {pictures.map((picture, index) => {
        return (
          <Picture
            key={picture.id}
            ID={picture.id}
            getID={getID}
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
