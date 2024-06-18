import React from "react";
import classes from "./Home.module.css";
import homeImg from "../../Assets/Images/Home-img.svg";

export const Home = () => {
  return (
    <>
      <section className={classes.home}>
        <div className={classes.home__container}>
          <div className={classes.home__container_wrapper}>
            <h1 className={classes.header}>Winter Vacation Trips</h1>
            <p className={classes.header__info}>
              Enjoy your winter vacations with warmth and amazing sightseeing on
              the mountains. Enjoy the best experience with us!
            </p>
            <button className={classes.header__button}>Lets’ go</button>
          </div>
          <div className={classes.home__container_wrapper}>
            <img
              src={homeImg}
              alt="man with laptop on the top of the mountain"
            />
          </div>
        </div>
      </section>
    </>
  );
};
