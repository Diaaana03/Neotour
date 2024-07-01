import React, { useEffect, useState } from "react";
import classes from "./Recommended.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const recommendedUrl = "https://muha-backender.org.kg/list-tours/";

export const Recommended = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const recommendedTour = async () => {
      try {
        const response = await axios.get(recommendedUrl);
        setTour(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching tours", error);
      }
    };
    recommendedTour();
  }, []);
  return (
    <>
      <section className={classes.recommended}>
        <div className={classes.container}>
          <h1 className={classes.recommended__h1}>Recommended</h1>

          <div className={classes.recommended__grid}>
            {tour.map((tourItem) => (
              <Link to={`/tour/${tourItem.id}`} key={tourItem.id}>
                <div className={classes.recommended__card} key={tourItem.id}>
                  <img
                    src={tourItem.thumbnail}
                    alt={"trip"}
                    className={classes.recommended__img}
                  />
                  <h3 className={classes.recommended__h3}>{tourItem.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
