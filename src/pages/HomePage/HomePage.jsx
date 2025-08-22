import React from "react";
import s from "./HomePage.module.css";
import Picture from "../../assets/image/Picture.jpg";

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroContainer}>
        <h1 className={s.heroTitle}>Campers of your dreams</h1>
        <p className={s.heroText}>
          You can find everything you want in our catalog
        </p>
        <button className={s.heroBtn}>View Now</button>
        {/* <img src={Picture} /> */}
      </div>
    </section>
  );
};

export default HomePage;
