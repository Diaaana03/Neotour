import React, { useEffect, useState } from "react";
import classes from "./Recommended.module.css";
import axios from "axios";

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
              <div className={classes.recommended__card} key={tourItem.id}>
                <img
                  src={tourItem.thumbnail}
                  alt={"trip"}
                  className={classes.recommended__img}
                />
                <h3 className={classes.recommended__h3}>{tourItem.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// .recomended{
//     h2{
//         color: var(--black, #141414);
//         font-size: 48px;
//         font-weight: 700;
//         margin-bottom: 8.2rem;
//     }

//     padding-bottom: 13.2rem;
// }

// .recomended__gallery{
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     gap: 1.4rem;

//     .gallery__img{
//         aspect-ratio: 1 / 1;
//         background: black;
//         overflow: hidden;
//         border-radius: 20px;
//         position: relative;
//         object-fit: contain;

//         img{
//             height: 100%;
//         }

/* <div className={classes.recommended__card}>
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
            </div> */
