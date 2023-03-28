import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const navLink = [
  {
    name: "Home",
    path: "/",
    icon: <AiFillHome />,
  },

  {
    name: "Cart",
    path: "/cart",
    icon: <BsFillCartFill />,
  },
];
const Navbar = () => {
  const data = useSelector((state) => state.cart);

  return (
    <section className={`container-fluid shadow-sm ${styles.outer}`}>
      <section className={`container ${styles.inner}`}>
        <section
          className={`row justify-content-between align-items-center ${styles.row}`}
        >
          <section className={`col ${styles.left}`}>
            <Link to={"/"}>
              <img
                className={styles.logo}
                src={`https://static.vecteezy.com/system/resources/previews/002/196/355/original/pizzeria-fast-food-logo-or-label-menu-design-for-cafe-and-restaurant-free-illustration-free-vector.jpg`}
                alt=""
              />
            </Link>
          </section>
          <section
            className={`col d-flex justify-content-end gap-5 align-items-center ${styles.right}`}
          >
            {navLink.map((value, index) => {
              return (
                <NavLink className={styles.link} key={index} to={value.path}>
                  {value.icon} {value.name}{" "}
                  {value.name === "Cart" && (
                    <span className="badge bg-danger">{data.cart.length}</span>
                  )}
                </NavLink>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
