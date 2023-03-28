import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem } from "../../../redux/cartSlice";
import styles from "./Card.module.scss";
export const CartCard = ({ id, image, name, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <ul
      className={`${styles.container} d-flex align-items-center justify-content-between
      text-center
      flex-column
      flex-sm-row
      shadow-sm
      my-3
      px-4
    `}
    >
      <li className="col-sm-3">
        <img className="col-8" src={image} alt="" />
      </li>
      <li className="col-sm-2">
        <h3>{name}</h3>
      </li>

      <li className={`${styles.price} col-sm-1`}>
        <h3>₹{price}</h3>
      </li>
    </ul>
  );
};
