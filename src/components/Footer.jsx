import React from "react";
import { useState } from "react";
import { ReactComponent as CancelIcon } from "../assets/cancel.svg";

const Footer = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`bg-[#464B4E] ${
        show ? "fixed" : "hidden"
      } w-full bottom-0 left-0 right-0 container max-w-[1440px] mx-auto h-[75px] flex justify-center items-center`}
    >
      <p className="text-white font-bold text-xl leading-7 flex-grow text-center">
        Launch Your Own CBD Business
      </p>
      <span
        className="text-xl pr-10 cursor-pointer"
        onClick={() => {
          setShow(false);
        }}
      >
        <CancelIcon />
      </span>
    </div>
  );
};

export default Footer;
