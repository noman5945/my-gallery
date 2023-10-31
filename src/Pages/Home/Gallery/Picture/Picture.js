import React from "react";

const Picture = ({ source, dragfunc, index, dragItem, dragOver }) => {
  return (
    <div
      className=" cursor-grab"
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOver.current = index)}
      onDragEnd={dragfunc}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={source} alt="pictureItems"></img>
    </div>
  );
};

export default Picture;
