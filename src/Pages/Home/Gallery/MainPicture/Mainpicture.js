import React from "react";
import MainPic from "../Picture/MainPic";

const Mainpicture = ({ mainimage }) => {
  return <MainPic source={mainimage ? mainimage.src : "undefined"}></MainPic>;
};

export default Mainpicture;
