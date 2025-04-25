import styles from "./TopHeader.module.css";

const TopHeader = () => {
  return (
    <header className={styles.topheader}>
      <div className={styles.container}>
        <p className={styles.container__desc}>
          Sign up and get 20% off to your first order.{" "}
          <a className={styles.container__drct}>Sign Up Now</a>
        </p>
      </div>
    </header>
  );
};

export default TopHeader;
