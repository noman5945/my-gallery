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
import MidSection from "./MidSection/MidSection";
import SearchIcon from "../../SharedComponents/SearchIcon/SearchIcon";

const Gallery = () => {
  /*A demo data */
  const [images, setImages] = useState([
    {
      id: "01",
      src: pic1,
      name: "headphone-1",
    },
    {
      id: "02",
      src: pic2,
      name: "headphone-2",
    },
    {
      id: "03",
      src: pic3,
      name: "headphone-3",
    },
    {
      id: "04",
      src: pic4,
      name: "headphone-4",
    },
    {
      id: "05",
      src: pic5,
      name: "headphone-5",
    },
    {
      id: "06",
      src: pic6,
      name: "headphone-6",
    },
    {
      id: "07",
      src: pic7,
      name: "wrist watch-1",
    },
    {
      id: "08",
      src: pic8,
      name: "wrist watch-2",
    },
    {
      id: "09",
      src: pic9,
      name: "wrist watch-3",
    },
    {
      id: "10",
      src: pic10,
      name: "Redwall bicycle and door",
    },
    {
      id: "11",
      src: pic11,
      name: "telephone",
    },
  ]);

  const featuredPic = images[0];
  const dragItem = useRef(null);
  const dragOver = useRef(null);
  const [IDs, setIDs] = useState([]);
  let sen = "";
  let temp = [];

  /*In this project Tailwind css has been used and there are some custom themes and attributes in the config file */
  /*In "SharedComponents" folder some shareable icons svg codes can be found and has been used in this project*/
  /*Deletion and drag n drop sorting works well but drag animation were not implemented as I coudn't come with a solution */

  /*this function handles the drag functionality. simply swapping the positions in array and thus reordring the image grid */
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

  /* this function takes the ID number of all selected (tick marked) images and put them into an array */
  const getID = (e) => {
    if (e.target.checked) {
      setIDs([...IDs, e.target.value]);
    } else if (!e.target.checked) {
      const ind = e.target.value;
      setIDs(IDs.filter((ID) => ID !== ind));
    }
  };

  // this function deletes the selected images
  const handleDelete = () => {
    IDs.map((ID) => {
      const ind = images.map((image) => image.id).indexOf(ID);
      if (ind !== -1) {
        images.splice(ind, 1);
      }
      return console.log(images);
    });
    setIDs([]);
  };

  /*this function takes the name to search from search box */
  const getName = (char) => {
    sen = char;
    //console.log(sen);
  };

  const clickSearch = () => {
    console.log(sen);
    const _imag = [...images];
    _imag.map((image) => {
      if (image.name.includes(sen.toLowerCase())) {
        temp.push(image);
      }
    });
    //console.log(temp);
    setImages(temp);
  };

  return (
    <div className=" items-center flex flex-col bg-upperback bg-no-repeat  bg-50% ">
      <div className=" w-1/2 text-center mt-[5%] flex flex-row items-center ">
        <a href="#picgrid">
          {" "}
          <SearchIcon clicksearch={clickSearch}></SearchIcon>
        </a>
        <input
          type="text"
          className=" bg-white border-none w-full rounded-full h-fit text-sm lg:text-2xl p-3  shadow-md"
          placeholder="Search image by name(Click the search icon)"
          onChange={(e) => getName(e.target.value)}
        ></input>
      </div>
      <p className=" lg:text-3xl font-bold mt-[8%]  text-black">FEATURED</p>
      <Mainpicture mainimage={featuredPic}></Mainpicture>
      <p className=" lg:text-3xl font-bold mt-[5%]">ALL IMAGES</p>
      <MidSection number={IDs} deletefunc={handleDelete}></MidSection>
      <OtherPictures
        pictures={images}
        getID={getID}
        dragfunction={handleDrag}
        dragItem={dragItem}
        dragOver={dragOver}
      ></OtherPictures>
      <div className=" text-center m-3">
        <p className=" text-2xl font-bold">
          Click on image and drag on other image to reorder the images
        </p>
      </div>
    </div>
  );
};

export default Gallery;
