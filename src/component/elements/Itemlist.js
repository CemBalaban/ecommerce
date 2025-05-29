import Image from "next/image";
import styles from "./Itemlist.module.scss";

const Itemlist = ({ title = "NEW ARRIVALS", products = [] }) => {
  return (
    <section className={styles.items}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>{title}</h2>
        <div className={styles.container__products}>
          {products.map((product, index) => {

            return (
              <div key={index} className={styles[`container__products__item`]}>
                <div
                  className={`${styles[`container__products__item__image`]} ${styles[`container__products__item__image__${product.imageClass}`]}`}
                ></div>

                <div className={styles[`container__products__item__specs`]}>
                  <p className={styles[`container__products__item__specs__title`]}>
                    {product.title}
                  </p>

                  <div className={styles[`container__products__item__specs__rate`]}>
                    {Array.from({ length: 5 }).map((_, i) => {
                      const isHalf = product.rating - i === 0.5;
                      const isFull = i < product.rating && !isHalf;
                      const src = i < product.rating
                        ? (isHalf ? "/hstar.png" : "/fstar.png")
                        : "/hstar.png";

                      return (
                        <Image
                          key={i}
                          className={styles[`container__products__item__specs__rate__${isFull ? "fstar" : "hstar"}`]}
                          src={src}
                          width={isFull ? 18.49 : 7.79}
                          height={18.49}
                          alt=""
                        />
                      );
                    })}
                    <p className={styles[`container__products__item__specs__rate__rates`]}>
                      {product.rating}/
                      <span className={styles[`container__products__item__specs__rate__faded`]}>
                        5
                      </span>
                    </p>
                  </div>

                  {product.salePrice ? (
                    <div className={styles[`container__products__item__specs__sale`]}>
                      <p className={`${styles[`container__products__item__specs__sale__price`]} ${styles[`container__products__item__specs__price`]}`}>
                        ${product.salePrice}
                      </p>
                      <p className={styles[`container__products__item__specs__sale__eprice`]}>
                        ${product.originalPrice}
                      </p>
                      <p className={styles[`container__products__item__specs__sale__discount`]}>
                        -{product.discount}%
                      </p>
                    </div>
                  ) : (
                    <p className={styles[`container__products__item__specs__price`]}>
                      ${product.originalPrice}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className={styles.container__button}>View All</button>
      </div>
    </section>
  );
};

export default Itemlist;
