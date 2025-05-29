import Image from "next/image";
import styles from "./CategoryProducts.module.scss";

const ProductItem = ({ title, price, rating, imageClass, originalPrice, discount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const dynamicImageClass = styles[`container__right__products__item__${imageClass}`];

  return (
    <div className={styles.container__right__products__item}>
      <div className={`${styles.container__right__products__item__image} ${dynamicImageClass}`}></div>
      <div className={styles.container__right__products__item__specs}>
        <p className={styles.container__right__products__item__specs__title}>{title}</p>
        <div className={styles.container__right__products__item__specs__rate}>
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < fullStars) {
              return (
                <Image
                  key={i}
                  className={styles.container__right__products__item__specs__rate__fstar}
                  src="/fstar.png"
                  width={18.49}
                  height={18.49}
                  alt="Full Star"
                />
              );
            } else if (i === fullStars && halfStar) {
              return (
                <Image
                  key={i}
                  className={styles.container__right__products__item__specs__rate__hstar}
                  src="/hstar.png"
                  width={8.79}
                  height={16.72}
                  alt="Half Star"
                />
              );
            }
            return null;
          })}
          <p className={styles.container__right__products__item__specs__rate__rates}>
            {Number(rating).toFixed(1)}/
            <span className={styles.container__right__products__item__specs__rate__faded}>5</span>
          </p>
        </div>
        {originalPrice ? (
          <div className={styles.container__right__products__item__specs__sale}>
            <p className={`${styles.container__right__products__item__specs__sale__price} ${styles.container__right__products__item__specs__price}`}>
              ${price}
            </p>
            <p className={styles.container__right__products__item__specs__sale__eprice}>${originalPrice}</p>
            <p className={styles.container__right__products__item__specs__sale__discount}>-{discount}%</p>
          </div>
        ) : (
          <p className={`${styles.container__right__products__item__specs__sale__price} ${styles.container__right__products__item__specs__price}`}>
            ${price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
