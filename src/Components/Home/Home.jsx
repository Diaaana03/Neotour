import React from "react";
import classes from "./Home.module.css";
import homeImg from "../../Assets/Images/Home-img.svg";
import arrow from "../../Assets/Images/btn-arrow.svg";

export const Home = () => {
  const scrollToDiscover = () => {
    const discoverSection = document.getElementById("discover");
    if (discoverSection) {
      discoverSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <button
              className={classes.header__button}
              onClick={scrollToDiscover}
            >
              Lets’ go
              <img src={arrow} alt="arrow" />
            </button>
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
