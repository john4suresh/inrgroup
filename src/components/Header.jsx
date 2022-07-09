import React from "react";
import { ReactComponent as SmokeLogo } from "../assets/Group2.svg";
import { ReactComponent as EalersLogo } from "../assets/Group3.svg";
import { ReactComponent as BrandLogo } from "../assets/Group5.svg";

const Header = ({ setShowModal }) => {
  return (
    <header className="px-12 flex flex-row justify-between items-center py-6">
      <SmokeLogo />
      <EalersLogo />
      <BrandLogo
        onClick={() => {
          setShowModal(true);
        }}
        className="cursor-pointer"
      />
    </header>
  );
};

export default Header;
