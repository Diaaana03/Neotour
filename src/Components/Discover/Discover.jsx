import React, { useState, useEffect } from "react";
import classes from "./Discover.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

const popularUrl = "https://muha-backender.org.kg/category-tour/popular/";
const featuredUrl = "https://muha-backender.org.kg/category-tour/featured/";
const mostVisitedUrl =
  "https://muha-backender.org.kg/category-tour/most_visited/";

export const Discover = () => {
  const [popularTours, setPopularTours] = useState([]);
  const [activeCategory, setActiveCategory] = useState("popular");

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

  useEffect(() => {
    const fetchTours = async () => {
      let url;
      switch (activeCategory) {
        case "popular":
          url = popularUrl;
          break;
        case "featured":
          url = featuredUrl;
          break;
        case "most_visited":
          url = mostVisitedUrl;
          break;
        default:
          url = popularUrl;
      }

      try {
        const response = await axios.get(url);
        setPopularTours(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(`Error fetching ${activeCategory} tours`, error);
      }
    };

    fetchTours();
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <section className={classes.discover} id="discover">
        <div className={classes.discover__container}>
          <h2 className={classes.discover__header}>Discover</h2>

          <div className={classes.discover__nav}>
            <ul className={classes.discover__ul}>
              <button
                className={`${classes.discover__btn} ${
                  activeCategory === "popular" ? classes.active : ""
                }`}
                onClick={() => handleCategoryClick("popular")}
              >
                Popular
              </button>
              <button
                className={`${classes.discover__btn} ${
                  activeCategory === "featured" ? classes.active : ""
                }`}
                onClick={() => handleCategoryClick("featured")}
              >
                Featured
              </button>
              <button
                className={`${classes.discover__btn} ${
                  activeCategory === "most_visited" ? classes.active : ""
                }`}
                onClick={() => handleCategoryClick("most_visited")}
              >
                Most Visited
              </button>
              <button className={classes.discover__btn}>Europe</button>
              <button className={classes.discover__btn}>Asia</button>
            </ul>
          </div>
        </div>
        <div className={classes.carousel__box}>
          <Carousel responsive={responsive}>
            {popularTours.map((tour) => (
              <Link
                to={`/tour/${tour.id}`}
                key={tour.id}
                className={classes.slide__card}
              >
                <img
                  className={classes.slide__img}
                  src={tour.thumbnail}
                  alt={tour.name}
                />
                <h3 className={classes.slide__h3}>{tour.name}</h3>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};
