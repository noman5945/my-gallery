import React from "react";
import Picture from "../Picture/Picture";
import UploadImage from "../UploadImage/UploadImage";

const OtherPictures = ({
  pictures,
  dragfunction,
  dragItem,
  dragOver,
  getID,
}) => {
  return (
    <div
      id="picgrid"
      className=" grid grid-cols-2 gap-3 h-1/2 w-1/2 lg:grid-cols-3 mb-9 backdrop-blur-md  "
    >
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
      <UploadImage></UploadImage>
    </div>
  );
};

export default OtherPictures;
