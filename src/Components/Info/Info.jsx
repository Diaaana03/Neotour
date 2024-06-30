import React from "react";
import { useState } from "react";
import classes from "./Info.module.css";
import crossIcon from "../../Assets/Images/crossIcon.svg";

export const Info = () => {
  const [modal, serModal] = useState(false);
  const [peopleCount, setPeopleCount] = useState(0);
  function decreaseCountPeople(event) {
    event.preventDefault();
    setPeopleCount((value) => (value >= 1 ? value - 1 : 0));
  }

  function increaseCountPeople(event) {
    event.preventDefault();
    setPeopleCount((value) => (value < 10 ? value + 1 : 10));
  }

  return (
    <>
      <section className={classes.info}>
        <div className={classes.book__container}>
          <div className={classes.book__header}>
            <div className={classes.book__h2}>Info</div>
            <img
              className={classes.cross__img}
              src={crossIcon}
              alt="cross icon"
            />
          </div>
          <p className={classes.book__text}>
            To submit an application for a tour reservation, you need to fill in
            your information and select the number of people for the reservation
          </p>
          <form className={classes.book__form}>
            <label htmlFor="phone">Phone number</label>
            <div className={classes.book__phone}>
              <input
                type="number"
                id="phone"
                maxLength={13}
                name="phone"
                placeholder="+996 (999) 999 999"
              />
            </div>
            <label htmlFor="comment">Commentaries to trip</label>
            <div>
              <input
                type="text"
                placeholder="Write your wishes to trip..."
                id="comment"
                name="comment"
              />
            </div>
            <label htmlFor="counter">Amount of people</label>
            <div className={classes.people__count}>
              <div className={classes.counter}>
                <button
                  className={classes.amount__btn}
                  onClick={decreaseCountPeople}
                >
                  -
                </button>
                <h3 className={classes.people__amount}>{peopleCount}</h3>
                <button
                  className={classes.amount__btn}
                  onClick={increaseCountPeople}
                >
                  +
                </button>
              </div>
            </div>
            <button className={classes.form__submit_btn}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
