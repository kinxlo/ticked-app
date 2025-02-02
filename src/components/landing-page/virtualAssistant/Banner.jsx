import React from "react";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <article className={styles.banner}>
      <img
        className={styles.float_img_1}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1707168039/ticked/Vector_1_oprfjd.png"
        alt="floaticon"
      />
      <img
        className={styles.float_img_2}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1707168041/ticked/Vector_gek916.png"
        alt="floaticon"
      />
      {/* <p className={styles.text}>
        If you are a CEO, Manager, Politician, Therapist, Doctor, Customer Care
        Representative, Realtor, Freelancer, Virtual Assistant, into business or
        you just need to get focused, be more productive and get more work done,
        you are in the right space and{" "}
        <span style={{ color: "rgba(247, 148, 31, 1)" }}>TICKED</span> is the
        solution you seek with 24/7 support system.
      </p> */}
    </article>
  );
};

export default Banner;
