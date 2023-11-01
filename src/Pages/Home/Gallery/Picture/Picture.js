import React from "react";

const Picture = ({ source, dragfunc, index, dragItem, dragOver }) => {
  return (
    <div
      className=" cursor-grab rounded-md shadow-md bg-purple p-3"
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOver.current = index)}
      onDragEnd={dragfunc}
      onDragOver={(e) => e.preventDefault()}
      onTouchStart={(e) => (
        (dragItem.current = index), console.log(dragItem.current)
      )}
      onTouchMove={(e) => (
        (dragOver.current = index), console.log(dragOver.current)
      )}
      onTouchEnd={dragfunc}
    >
      <img className=" rounded-md" src={source} alt="pictureItems"></img>
    </div>
  );
};

export default Picture;
