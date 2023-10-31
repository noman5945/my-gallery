import React, { useRef, useState } from "react";
import Mainpicture from "./MainPicture/Mainpicture";
import OtherPictures from "./OtherPictures/OtherPictures";
import pic1 from "../../../assets/image-1.webp";
import pic2 from "../../../assets/image-2.webp";
import pic3 from "../../../assets/image-3.webp";
import pic4 from "../../../assets/image-4.webp";
import pic5 from "../../../assets/image-5.webp";
import pic6 from "../../../assets/image-6.webp";
import pic7 from "../../../assets/image-7.webp";
import pic8 from "../../../assets/image-8.webp";
import pic9 from "../../../assets/image-9.webp";
import pic10 from "../../../assets/image-10.jpeg";
import pic11 from "../../../assets/image-11.jpeg";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: "01",
      src: pic1,
    },
    {
      id: "02",
      src: pic2,
    },
    {
      id: "03",
      src: pic3,
    },
    {
      id: "04",
      src: pic4,
    },
    {
      id: "05",
      src: pic5,
    },
    {
      id: "06",
      src: pic6,
    },
    {
      id: "07",
      src: pic7,
    },
    {
      id: "08",
      src: pic8,
    },
    {
      id: "09",
      src: pic9,
    },
    {
      id: "10",
      src: pic10,
    },
    {
      id: "11",
      src: pic11,
    },
  ]);
  const featuredPic = images[0];
  const dragItem = useRef(null);
  const dragOver = useRef(null);
  const handleDrag = () => {
    //duplicate items
    const _imageItems = [...images];

    //swap items
    const temp = _imageItems[dragItem.current];
    _imageItems[dragItem.current] = _imageItems[dragOver.current];
    _imageItems[dragOver.current] = temp;

    //reset array
    setImages(_imageItems);
  };
  return (
    <div className=" m-5 items-center flex flex-col">
      <Mainpicture mainimage={featuredPic}></Mainpicture>
      <OtherPictures
        pictures={images}
        dragfunction={handleDrag}
        dragItem={dragItem}
        dragOver={dragOver}
      ></OtherPictures>
    </div>
  );
};

export default Gallery;
