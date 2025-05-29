import Image from "next/image";
import styles from "./Testimonials.module.scss";

const TestimonialCard = ({ name, text, stars, verified, blur}) => {
  return (
    <div className={`${styles.container__comments__item} ${
        blur ? styles["blur"] : ""
      }`}>
      <div className={styles.container__comments__item__container}>
        <div className={styles.container__comments__item__container__rate}>
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < Math.floor(stars)) {
              return (
                <Image
                  key={i}
                  className={styles.container__comments__item__container__rate__star}
                  src="/fstar.png"
                  width={22.58}
                  height={22.58}
                  alt="Full Star"
                />
              );
            } else if (i === Math.floor(stars) && stars % 1 !== 0) {
              return (
                <Image
                  key={i}
                  className={styles.container__comments__item__container__rate__star}
                  src="/hstar.png"
                  width={10.74}
                  height={24.71}
                  alt="Half Star"
                />
              );
            }
            return null;
          })}
        </div>
        <h4 className={styles.container__comments__item__container__name}>
          {name}
          {verified && (
            <Image
              className={styles.container__comments__item__container__icon}
              src="/confirmed.png"
              width={19.5}
              height={19.5}
              alt="Verified"
            />
          )}
        </h4>
        <p className={styles.container__comments__item__container__comment}>&quot;{text}&quot;</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
