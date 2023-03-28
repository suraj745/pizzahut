import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../../redux/pizzApi";
import styles from "./SingleProduct.module.scss";
// import { getCartProduct } from "../../redux/pizzApi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
const SingleProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state) => {
    return state.single.single;
  });
  const { id } = useParams();

  const cart = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);

  if (detail.loading) {
    return <h1>loading....</h1>;
  }

  return (
    <div className={`container-fluid ${styles.outer}`}>
      <section className={`container ${styles.inner}`}>
        <section
          className={`row  ${styles.row} justify-content-between align-items-center`}
        >
          <section className={`col-5 ${styles.left}`}>
            <img src={detail.img} alt="" />
          </section>
          <ul className={`col-6 ${styles.right}`}>
            <li>
              <h1>{detail.name}</h1>
            </li>
            <li>
              <p>{detail.description}</p>
            </li>
            <li>₹{detail.price}</li>
            <li>
              <button
                className={`btn btn-danger col-5  ${styles.cart_button}`}
                onClick={(e) => {
                  dispatch(addToCart(detail));
                }}
              >
                Cart
              </button>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default SingleProduct;
