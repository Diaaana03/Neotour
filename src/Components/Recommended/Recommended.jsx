import React from "react";
import classes from "./Recommended.module.css";
import grid1 from "../../Assets/Images/grid1.svg";

export const Recommended = () => {
  return (
    <>
      <section className={classes.recommended}>
        <div className={classes.container}>
          <h1 className={classes.recommended__h1}>Recommended</h1>
          <div className={classes.recommended__grid}>
            <div className={classes.recommended__card}>
              <img
                src={grid1}
                alt={grid1}
                className={classes.recommended__img}
              />
              <h3 className={classes.recommended__h3}>Mountains</h3>
            </div>
            <div className={classes.recommended__card}>
              <img
                src={grid1}
                alt={grid1}
                className={classes.recommended__img}
              />
              <h3 className={classes.recommended__h3}>Mountains</h3>
            </div>
            <div className={classes.recommended__card}>
              <img
                src={grid1}
                alt={grid1}
                className={classes.recommended__img}
              />
              <h3 className={classes.recommended__h3}>Mountains</h3>
            </div>
            <div className={classes.recommended__card}>
              <img
                src={grid1}
                alt={grid1}
                className={classes.recommended__img}
              />
              <h3 className={classes.recommended__h3}>Mountains</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
