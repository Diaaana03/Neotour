import React from "react";
import classes from "./Tour.module.css";
import userImg from "../../Assets/Images/userImg.svg";
import locationIcon from "../../Assets/Images/locationIcon.svg";

export const Tour = () => {
  return (
    <>
      <section className={classes.tour}>
        <button className={classes.back__btn}>Go back</button>
        <div className={classes.tour__info}>
          <div className={classes.tour__container}>
            <h1 className={classes.tour__h1}>Mount Fuji</h1>
            <div className={classes.tour__location}>
              <img src={locationIcon} alt="Location icon" />
              <h5 className={classes.tour__h5}>Honshu, Japan</h5>
            </div>
            <h3 className={classes.tour__h3}>Description</h3>
            <p className={classes.reviews__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quaerat sit totam nostrum rerum dolor distinctio dolorum veritatis
              corrupti reprehenderit, molestiae enim suscipit vitae accusamus,
              ad soluta voluptate obcaecati pariatur? Sapiente quisquam numquam
              velit voluptas! Praesentium vel eaque, fugiat blanditiis eveniet
              accusantium modi deleniti aliquam possimus voluptate ducimus
              asperiores delectus distinctio dolorum temporibus! Corporis.
            </p>
            <h3 className={classes.tour__h3}>Reviews</h3>
            <div className={classes.tour__reviews}>
              <div className={classes.reviews__user}>
                <img src={userImg} alt="userImg" />
                <h4 className={classes.tour__h4}>Anonymous</h4>
              </div>
              <p className={classes.reviews__text}>
                That was such a nice place. The most beautiful place I’ve ever
                seen. My advice to everyone not to forget to take warm coat
              </p>
            </div>
            <button className={classes.book__btn}>Book now</button>
          </div>
        </div>
      </section>
    </>
  );
};
