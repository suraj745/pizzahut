import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMenu } from "../../redux/pizzApi";
import Card from "./Card/Card";
import styles from "./Card/Card.module.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
const Home = () => {
  const dispatch = useDispatch();
  const { menu, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getAllMenu());
  }, []);

  if (loading) {
    return <h1>...loading</h1>;
  }

  return (
    <>
      <HomeHeader />
      <section className={"container-fluid pb-5"}>
        <section className={"container"}>
          <section className={`row ${styles.row} align-items-center  gy-5`}>
            {menu.map(({ id, img, name, price, description }, index) => {
              return (
                <section
                  key={index}
                  className={` col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center`}
                >
                  <Link
                    to={`/single/${id}`}
                    className="text-decoration-none text-dark"
                  >
                    <Card
                      key={index}
                      img={img}
                      name={name}
                      price={price}
                      description={description}
                    />
                  </Link>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
