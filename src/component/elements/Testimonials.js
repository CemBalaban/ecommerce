import Image from "next/image";
import styles from "./Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ testimonials = []}) => {
  return (
    <section className={styles.customercomments}>
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h2 className={styles.container__title__text}>OUR HAPPY CUSTOMERS</h2>
          <div className={styles.container__title__arrow}>
            <Image
              className={styles.container__title__arrow__img}
              src="/leftarrow.png"
              width={15.76}
              height={18.75}
              alt="Previous"
            />
            <Image
              className={styles.container__title__arrow__img}
              src="/rightarrow.png"
              width={15.76}
              height={18.75}
              alt="Next"
            />
          </div>
        </div>
        <div className={styles.container__comments}>
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;