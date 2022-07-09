import React from "react";
import { ReactComponent as StarIcon } from "../assets/star.svg";
import { ReactComponent as ThumbIcon } from "../assets/thumb.svg";
import { ReactComponent as MessageIcon } from "../assets/message.svg";
import Image from "../assets/menuitem.jpg";

const MenuItem = ({ label }) => {
  return (
    <div className="flex justify-center items-center mb-3">
      <div className="image px-5 py-8 border border-[#E5E5E5] rounded-3xl">
        <img src={Image} alt="INR" />
      </div>
      <div className="content max-w-[400px] px-10 py-5 border border-[#E5E5E5] border-l-0 rounded-r-3xl max-h-[250px]">
        <h3 className="text-2xl font-bold text-[#464B4E]">{label}</h3>
        <p className="text-xs text-[#464B4E]">
          By <span className="font-bold">Global X Change</span>
        </p>
        <p className="text-[#7B7B7B] text-xs leading-6 py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consect <span className="font-black">Read More</span>
        </p>
        <div className="flex">
          <div className="mr-2">
            <StarIcon />
          </div>
          <div className="mr-2">
            <StarIcon />
          </div>
          <div className="mr-2">
            <StarIcon />
          </div>
          <div className="mr-2">
            <StarIcon />
          </div>
          <div className="mr-2">
            <StarIcon />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-base text-[#464B4E]">
              {"$5.31"} <span className="text-[10px] font-normal">USD</span>
            </p>
          </div>
          <div className="inline-flex justify-center items-center">
            <div className="border border-[#E5E5E5] p-2 rounded-md mr-3">
              <ThumbIcon />
            </div>
            <div className="border border-[#E5E5E5] p-2 rounded-md">
              <MessageIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
