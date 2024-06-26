import React from "react";
import classes from "./Discover.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftArrow from "../../Assets/Images/left-arrow.svg";
import rightArrow from "../../Assets/Images/right-arrow.svg";
import slide1 from "../../Assets/Images/Slide1.svg";

export const Discover = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className={classes.discover}>
        <div className={classes.discover__container}>
          <h2 className={classes.discover__header}>Discover</h2>
          {/* <div className={classes.header__arrow_btns}>
            <button className={classes.arrow__btn}>
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className={classes.arrow__btn}>
              <img src={rightArrow} alt="right-arrow" />
            </button>
          </div> */}
        </div>
        <div className={classes.carousel__box}>
          <Carousel responsive={responsive}>
            <div className={classes.slide__card}>
              <img className={classes.slide__img} src={slide1} alt="slide1" />
            </div>
            <div className={classes.slide__card}>
              <img className={classes.slide__img} src={slide1} alt="slide1" />
            </div>
            <div className={classes.slide__card}>
              <img className={classes.slide__img} src={slide1} alt="slide1" />
            </div>
            <div>
              <img className={classes.slide__img} src={slide1} alt="slide1" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};
