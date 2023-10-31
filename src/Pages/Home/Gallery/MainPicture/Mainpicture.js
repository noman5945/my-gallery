import React from "react";
import MainPic from "../Picture/MainPic";

const Mainpicture = ({ mainimage }) => {
  return <MainPic source={mainimage.src}></MainPic>;
};

export default Mainpicture;
