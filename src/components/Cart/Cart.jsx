import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../Card/CartCard";
import * as _ from "lodash";
import { clearCart } from "../../../redux/cartSlice";
import styles from "./Cart.module.scss";
import { BsFillBagHeartFill } from "react-icons/bs";
const Cart = () => {
  const getProduct = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();
  console.log(getProduct);

  return (
    <section className={`container-fluid`}>
      <section className={`container`}>
        <section className={`row`}>
          <section className={`col-md-8`}>
            {getProduct.cart.length === 0 && (
              <h1 className="text-center text-danger  d-flex align-items-center justify-content-center py-5">
                &nbsp; <BsFillBagHeartFill className={styles.bag} /> &nbsp; is
                empty
              </h1>
            )}

            {getProduct.cart.map((value, index) => {
              return (
                <>
                  <CartCard
                    id={value.id}
                    quantity={value.quantity}
                    key={index}
                    name={value.name}
                    image={value.img}
                    price={value.price}
                  />
                </>
              );
            })}
          </section>
          <ul className="col-md-4 position-relative d-flex justify-content-md-center align-items-start  ">
            <li className="py-5 position-fixed">
              <h2>Total : ₹{_.sumBy(getProduct.cart, "price")}</h2>
              <button
                onClick={() => dispatch(clearCart())}
                className="btn btn-danger my-5"
              >
                <h3> Clear All</h3>
              </button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Cart;
