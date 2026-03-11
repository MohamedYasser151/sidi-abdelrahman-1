import React from "react";
import styles from "./css/designer.module.css";
import img from  './image/1.webp'
function Designer() {
  return (
    <div className={styles.page}>

      <div className={styles.stars}></div>

      <div className={styles.card}>

        <div className={styles.imageBox}>
          <img src={img} alt="designer" />
        </div>

        <h1 className={styles.name}>Mohamed Yasser</h1>

        <p className={styles.role}>
web developer💻
        </p>

       
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/mohamed_y_asser/"
            target="_blank"
            rel="noreferrer"
            className={styles.instagram}
          >
            Instagram
          </a>
        </div>

    

      </div>

    </div>
  );
}

export default Designer;