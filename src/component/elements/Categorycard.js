import styles from "./Categorycard.module.scss";

const Categorycard = () => {
  return (
    <section className={styles.browseby}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>BROWSE BY DRESS STYLE</h2>
        <div className={styles.container__direction}>
          <button
            className={`${styles.container__direction__littlebutton} ${styles.container__direction__casual}`}
          >
            Casual
          </button>
          <button
            className={`${styles.container__direction__bigbutton} ${styles.container__direction__formal}`}
          >
            Formal
          </button>
          <button
            className={`${styles.container__direction__bigbutton} ${styles.container__direction__party}`}
          >
            Party
          </button>
          <button
            className={`${styles.container__direction__littlebutton} ${styles.container__direction__gym}`}
          >
            Gym
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categorycard;
