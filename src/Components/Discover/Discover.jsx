import React from "react";
import classes from "./Discover.module.css";
import leftArrow from "../../Assets/Images/left-arrow.svg";
import rightArrow from "../../Assets/Images/right-arrow.svg";

export const Discover = () => {
  return (
    <>
      <section className={classes.discover}>
        <div className={classes.discover__container}>
          <h2 className={classes.discover__header}>Discover</h2>
          <div className={classes.header__arrow_btns}>
            <button className={classes.arrow__btn}>
              <img src={leftArrow} alt="left-arrow" />
            </button>
            <button className={classes.arrow__btn}>
              <img src={rightArrow} alt="right-arrow" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
