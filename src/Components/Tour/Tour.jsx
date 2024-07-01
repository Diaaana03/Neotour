import React, { useEffect, useState } from "react";
import classes from "./Tour.module.css";
import userImg from "../../Assets/Images/userImg.svg";
import locationIcon from "../../Assets/Images/locationIcon.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Info } from "../Info/Info";

export const Tour = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `https://muha-backender.org.kg/retrieve-tour/${id}/`
        );
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    fetchTour();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!tour) {
    return <div className={classes.loading}>Loading...</div>;
  }

  return (
    <>
      <section className={classes.tour}>
        <Link to="/">
          <button className={classes.back__btn}>Go back</button>
        </Link>
        <img
          src={tour.thumbnail}
          className={classes.tour__background}
          alt="image"
        />
        <div className={classes.tour__info}>
          <div className={classes.tour__container}>
            <h1 className={classes.tour__h1}>{tour.name}</h1>
            <div className={classes.tour__location}>
              <img src={locationIcon} alt="Location icon" />
              <h5 className={classes.tour__h5}>{tour.location}</h5>
            </div>
            <h3 className={classes.tour__h3}>Description</h3>
            <p className={classes.reviews__text}>{tour.description}</p>
            <h3 className={classes.tour__h3}>Reviews</h3>
            {tour.reviews.map((review, index) => (
              <div className={classes.tour__reviews} key={index}>
                <div className={classes.reviews__user}>
                  <img
                    src={review.reviewer_photo}
                    onError={(e) => {
                      e.target.src = userImg;
                    }}
                    alt="userImg"
                  />
                  <h4 className={classes.tour__h4}>{review.reviewer_name}</h4>
                </div>
                <p className={classes.reviews__text}>{review.review_text}</p>
              </div>
            ))}
            <button className={classes.book__btn} onClick={openModal}>
              Book now
            </button>
          </div>
        </div>
        {isModalOpen && <Info closeModal={closeModal} />}
      </section>
    </>
  );
};
