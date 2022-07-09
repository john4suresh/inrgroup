import React from "react";

const MenuListItem = ({
  active,
  label,
  onClick = () => {},
  id,
  color,
  icon,
}) => {
  return (
    <li className="last:mr-0 flex-auto text-center max-w-[256px]">
      <a
        className={
          "text-xs font-bold px-5 py-3 inline-flex leading-normal w-full max-w-[256px] justify-center items-center text-[#464B4E] bg-white" +
          (active
            ? " border-b-2 border-[#464B4E]"
            : "text-" + color + "-600 bg-white")
        }
        onClick={onClick}
        data-toggle="tab"
        href={`#${id}`}
        role="tablist"
      >
        <span className="pr-3">{icon}</span>
        <span>{label}</span>
      </a>
    </li>
  );
};

export default MenuListItem;
