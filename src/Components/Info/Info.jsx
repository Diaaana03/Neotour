import React from "react";
import { useState } from "react";
import classes from "./Info.module.css";
import crossIcon from "../../Assets/Images/crossIcon.svg";
import { Link } from "react-router-dom";
import Flag from "../../Assets/Images/Flag.svg";

export const Info = ({ closeModal }) => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phoneNumber, comment, peopleCount });
  };

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
              onClick={closeModal}
            />
          </div>
          <p className={classes.book__text}>
            To submit an application for a tour reservation, you need to fill in
            your information and select the number of people for the reservation
          </p>
          <form className={classes.book__form} onSubmit={handleSubmit}>
            <label htmlFor="phone">Phone number</label>
            <div className={classes.book__phone}>
              <div className={classes.flag__box}>
                <img src={Flag} alt="Flag" className={classes.flag__icon} />
              </div>
              <input
                className={classes.phone__input}
                type="number"
                id="phone"
                maxLength={13}
                name="phone"
                placeholder="+996"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
            </div>
            <label htmlFor="comment">Commentaries to trip</label>
            <div>
              <input
                type="text"
                placeholder="Please leave your comments to trip..."
                id="comment"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
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
            <Link to="/">
              <button className={classes.form__submit_btn}>Submit</button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
