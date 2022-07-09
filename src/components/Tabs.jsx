import React from "react";
import MenuItem from "./MenuItem";
import MenuListItem from "./MenuListItem";
const Tabs = ({ color, data }) => {
  const [openTab, setOpenTab] = React.useState(0);
  const menuListIds = Object.keys(data);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3  flex-row border-b-2 border-[#E5E5E5]"
            role="tablist"
          >
            {menuListIds.map((ele, index) => (
              <MenuListItem
                active={openTab === index}
                label={data[ele].label}
                id={ele}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(index);
                }}
                color={color}
                icon={data[ele].icon}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {menuListIds.map((ele, index) => (
                  <div
                    className={openTab === index ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="flex flex-wrap justify-between items-center">
                      {(data[ele].childrenData || []).map(({ item, id }) => (
                        <MenuItem label={item} key={id} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
