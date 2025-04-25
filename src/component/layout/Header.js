import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <Image
            className={styles.container__logo__menuicon}
            src="/threeline.png"
            width={18.75}
            height={14.25}
            alt=""
          ></Image>

          <h1 className={styles.container__logo__text}>SHOP.CO</h1>
        </div>
        <div className={styles.container__menu}>
          <a className={styles.container__menu__drct} href="/product">
            Shop
          </a>
          <a className={styles.container__menu__drct} href="/category">
            On Sale
          </a>
          <a className={styles.container__menu__drct}>New Arrivals</a>
          <a className={styles.container__menu__drct}>Brands</a>
        </div>
        <div className={styles.container__search}>
          <div className={styles.container__searchsec}>
            <Image
              className={styles.container__search__img}
              src="/search_icon.png"
              width={24}
              height={24}
              alt=""
            />
            <input
              className={styles.container__search__box}
              type="text"
              placeholder="Search for products..."
            ></input>
          </div>
        </div>
        <div className={styles.container__direction}>
          <button className={styles.container__direction__drct}>
            <Image
              className={styles.container__direction__drct__iconres}
              src="/searchres.png"
              width={24}
              height={24}
              alt=""
            />
          </button>
          <button className={styles.container__direction__drct}>
            <Image
              className={styles.container__direction__drct__icon}
              src="/cart.png"
              width={24}
              height={24}
              alt=""
            />
          </button>
          <button className={styles.container__direction__drct}>
            <Image
              className={styles.container__direction__drct__icon}
              src="/profile.png"
              width={24}
              height={24}
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
