import React, { useState } from "react";

const Picture = ({
  source,
  dragfunc,
  index,
  dragItem,
  dragOver,
  ID,
  getID,
}) => {
  const [upperStyle, setUpperStyle] = useState(
    "absolute left-[85%] top-[10%] cursor-pointer opacity-0  h-[24px] w-[24px] checked:opacity-100 transition-opacity"
  );
  const divStyle =
    " relative cursor-grab rounded-md shadow-md bg-white border border-fade hover:scale-105 transition-all ease-in-out";

  return (
    <div
      className={divStyle}
      draggable
      onDragStart={(e) => (dragItem.current = index)}
      onDragEnter={(e) => (dragOver.current = index)}
      onDragEnd={dragfunc}
      onDragOver={(e) => e.preventDefault()}
      onTouchStart={(e) => (dragItem.current = index)}
      onTouchMove={(e) => (dragOver.current = index)}
      onTouchEnd={dragfunc}
      onMouseMove={(e) =>
        setUpperStyle(
          "absolute left-[85%] top-[10%] cursor-pointer opacity-100  h-[24px] w-[24px] checked:opacity-100 transition-opacity"
        )
      }
      onMouseLeave={(e) =>
        setUpperStyle(
          "absolute left-[85%] top-[10%] cursor-pointer opacity-0  h-[24px] w-[24px] checked:opacity-100 transition-opacity"
        )
      }
    >
      <input
        type="checkbox"
        className={upperStyle}
        value={ID}
        onChange={(e) => getID(e)}
      ></input>

      <img className=" rounded-md  " src={source} alt="pictureItems"></img>
    </div>
  );
};

export default Picture;
