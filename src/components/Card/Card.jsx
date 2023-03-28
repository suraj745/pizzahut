import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
const Card = ({ img, name, description, price }) => {
  return (
    <ul className={`${styles.card} `}>
      <li className={`${styles.badge} badge bg-danger`}>
        <p>₹{price}</p>
      </li>
      <li className={styles.image_section}>
        <img src={img} alt="" />
      </li>
      <li className={`${styles.content_section} text-center px-2 pb-3`}>
        <section className="py-3">
          <h2>{name}</h2>
          <p>{description}</p>
        </section>
      </li>
    </ul>
  );
};

export default Card;
