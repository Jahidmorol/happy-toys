import React from "react";
import img1 from "../../assets/gallary/img (1).jpg";
import img2 from "../../assets/gallary/img (2).jpg";
import img3 from "../../assets/gallary/img (3).jpg";
import img4 from "../../assets/gallary/img (4).jpg";
import img5 from "../../assets/gallary/img (5).jpg";
import img6 from "../../assets/gallary/img (6).jpg";
import img7 from "../../assets/gallary/img (7).jpg";
import img8 from "../../assets/gallary/img (8).jpg";
import img9 from "../../assets/gallary/img (9).jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="grid md:grid-cols-2 gap-3 gap-x-0 lg:grid-cols-3 border-2 w-[70%] mx-auto">
      {images.map((img, index) => (
        <div key={index} className=" w-64 h-64 mx-auto border bg-[#80BD9E]"> <img  src={img} className="h-56 w-56 mx-auto mt-3 "></img></div>
      ))}
    </div>
  );
};

export default Gallery;
