import React from "react";
import styles from "./Dropdown.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory, fetchBySort } from "../../../redux/pizzApi";

const CustomDropdown = ({ dropdownName, dropdownMenu }) => {
  const dispatch = useDispatch();

  return (
    <section className="py-5 ">
      <div
        className={`dropdown ${styles.dropdown_container} d-flex align-items-center `}
      >
        <button
          style={{ border: "none" }}
          className={`btn btn-secondary dropdown-toggle bg-danger`}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropdownName}
        </button>
        <ul
          className="dropdown-menu py-0"
          aria-labelledby="dropdownMenuButton1"
        >
          {dropdownMenu.map((value, index) => {
            return (
              <li
                key={index}
                className={` ${styles.dropdown_list}`}
                onClick={() => {
                  dropdownName === "Filter"
                    ? dispatch(fetchByCategory(value))
                    : dispatch(
                        fetchBySort(
                          value === `Highest to Lowest` ? "desc" : "asc"
                        )
                      );
                }}
              >
                <a className={`dropdown-item py-2`} href="#">
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CustomDropdown;
