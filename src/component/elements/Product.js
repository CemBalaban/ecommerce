import styles from "./Product.module.css";
import Image from "next/image";

const Products = () => {
  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <div
            className={`${styles.container__left__img} ${styles.container__left__side1}`}
          ></div>
          <div
            className={`${styles.container__left__img} ${styles.container__left__side2}`}
          ></div>
          <div
            className={`${styles.container__left__img} ${styles.container__left__side3}`}
          ></div>
        </div>
        <div className={styles.container__middle}>
          <div className={styles.container__middle__img}></div>
        </div>
        <div className={styles.container__right}>
          <h4 className={styles.container__right__title}>
            ONE LIFE GRAPHIC T-SHIRT
          </h4>
          <div className={styles.container__right__rate}>
            <Image
              className={styles.container__right__rate__fstar}
              src="/fstar.png"
              width={24.71}
              height={24.71}
              alt=""
            ></Image>
            <Image
              className={styles.container__right__rate__fstar}
              src="/fstar.png"
              width={24.71}
              height={24.71}
              alt=""
            ></Image>
            <Image
              className={styles.container__right__rate__fstar}
              src="/fstar.png"
              width={24.71}
              height={24.71}
              alt=""
            ></Image>
            <Image
              className={styles.container__right__rate__fstar}
              src="/fstar.png"
              width={24.71}
              height={24.71}
              alt=""
            ></Image>
            <Image
              className={styles.container__right__rate__hstar}
              src="/hstar.png"
              width={11.75}
              height={24.71}
              alt=""
            ></Image>
            <p className={styles.container__right__rate__rates}>
              4.5/
              <span className={styles.container__right__rate__faded}>5</span>
            </p>
          </div>
          <div className={styles.container__right__prices}>
            <p className={styles.container__right__prices__price}>$260</p>
            <p className={styles.container__right__prices__exprice}>$300</p>
            <div className={styles.container__right__prices__dis}>
              <p className={styles.container__right__prices__dis__discount}>
                -40%
              </p>
            </div>
          </div>
          <p className={styles.container__right__desc}>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className={styles.container__line}></div>
          <p className={styles.container__right__selcol}>Select Colors</p>
          <div className={styles.container__right__colorpicker}>
            <div
              className={`${styles.container__right__colorpicker__color} ${
                styles.container__right__colorpicker - brown
              }`}
            ></div>
            <div
              className={`${styles.container__right__colorpicker__color} ${
                styles.container__right__colorpicker - green
              }`}
            ></div>
            <div
              className={`${styles.container__right__colorpicker__color} ${
                styles.container__right__colorpicker - blue
              }`}
            ></div>
          </div>
          <div className={styles.container__line}></div>
          <p className={styles.container__right__choosesize}>Choose Size</p>
          <div className={styles.container__right__sizes}>
            <div className={styles.container__right__sizes__size}>
              <p className={styles.container__right__sizes__size__text}>
                Small
              </p>
            </div>
            <div className={styles.container__right__sizes__size}>
              <p className={styles.container__right__sizes__size__text}>
                Medium
              </p>
            </div>
            <div
              className={`${styles.container__right__sizes__size} ${
                styles.container__right__sizes - black
              }`}
            >
              <p
                className={`${styles.container__right__sizes__size__text} ${
                  styles.container__right__sizes - white
                }`}
              >
                Large
              </p>
            </div>
            <div className={styles.container__right__sizes__size}>
              <p className={styles.container__right__sizes__size__text}>
                X-Large
              </p>
            </div>
          </div>
          <div className={styles.container__line}></div>
          <div className={styles.container__right__card}>
            <div className={styles.container__right__card__amount}>
              <Image
                className={styles.container__right__card__amount__img}
                src="/minus.png"
                width={19.75}
                height={2.25}
                alt=""
              ></Image>
              <p className={styles.container__right__card__amount__text}>1</p>
              <Image
                className={styles.container__right__card__amount__img}
                src="/plus.png"
                width={18.75}
                height={18.75}
                alt=""
              ></Image>
            </div>
            <div className={styles.container__right__card__addto}>
              <p className={styles.container__right__card__addto__text}>
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
