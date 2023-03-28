import React from "react";
import CustomDropdown from "../Dropdown/CustomDropdown";
const HomeHeader = () => {
  const header = [
    {
      dropdownName: "Filter",
      dropdownMenu: ["All", "Vegeterian", "Non-Vegeterian"],
    },

    {
      dropdownName: "Filter By Price",
      dropdownMenu: ["Highest to Lowest", , "Lowest to Highest"],
    },
  ];
  return (
    <section className={`container-fluid`}>
      <section className={`container`}>
        <section className={`row`}>
          {header.map((value, index) => {
            return (
              <section className="col-1" key={index}>
                <CustomDropdown
                  key={index}
                  dropdownMenu={value.dropdownMenu}
                  dropdownName={value.dropdownName}
                />
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default HomeHeader;
