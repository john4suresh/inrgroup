import React from "react";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

const HomeBanner = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="max-w-[480px]">
        <img src={Image1} alt="INR Group" className="w-full" />
      </div>
      <div className="max-w-[480px]">
        <img src={Image2} alt="INR Group" className="w-full" />
      </div>
      <div className="max-w-[480px]">
        <img src={Image3} alt="INR Group" className="w-full" />
      </div>
    </div>
  );
};

export default HomeBanner;
