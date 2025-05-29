import styles from "./CategoryProducts.module.scss";
import ProductItem from "./ProductsItem";
import Image from "next/image";

const CategoryProducts = ({ products = []}) => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.container__left}>
        <div className={styles.container__left__titles}>
          <p className={styles.container__left__titles__title}>Filters</p>
          <Image
            className={styles.container__left__title__img}
            src="/filter40.png"
            width={20.25}
            height={18.75}
            alt="Filter icon"
          />
        </div>
        <div className={styles.container__left__split} />

        <div className={styles.container__left__categories}>
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cat) => (
            <div key={cat} className={styles.container__left__categories__category}>
              <p className={styles.container__left__categories__category__text}>
                {cat}
              </p>
              <Image
                className={styles.container__left__categories__category__img}
                src="/rdirect.png"
                width={7}
                height={12}
                alt={`${cat} arrow`}
              />
            </div>
          ))}
        </div>
        <div className={styles.container__left__split} />

        <div className={styles.container__left__price}>
          <div className={styles.container__left__price__titles}>
            <p className={styles.container__left__price__titles__title}>Price</p>
            <Image
              className={styles.container__left__price__titles__img}
              src="/udirect.png"
              width={11.5}
              height={6.5}
              alt="Price arrow"
            />
          </div>
          <div className={styles.container__left__price__line}>
            <div className={styles.container__left__price__line__circle} />
            <div className={styles['container__left__price__line--black']} />
            <div className={styles.container__left__price__line__circle} />
            <div className={styles.container__left__price__line__prices}>
              <div className={styles.container__left__price__line__prices__text}>
                $50
              </div>
              <div className={styles.container__left__price__line__prices__text}>
                $200
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container__left__split} />

        <div className={styles.container__left__colors}>
          <div className={styles.container__left__colors__titles}>
            <p className={styles.container__left__colors__titles__title}>Colors</p>
            <Image
              className={styles.container__left__colors__titles__img}
              src="/udirect.png"
              width={11.5}
              height={6.5}
              alt="Colors arrow"
            />
          </div>
          <div className={styles.container__left__colors__color}>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__green}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__red}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__yellow}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__orange}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__cyan}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__blue}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__purple}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__pink}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__white}`}></div>
            <div className={`${styles.container__left__colors__color__item} ${styles.container__left__colors__color__black}`}></div>
          </div>
        </div>
        <div className={styles.container__left__split} />

        <div className={styles.container__left__sizes}>
          <div className={styles.container__left__sizes__titles}>
            <p className={styles.container__left__sizes__titles__title}>Size</p>
            <Image
              className={styles.container__left__sizes__titles__img}
              src="/udirect.png"
              width={11.5}
              height={6.5}
              alt="Sizes arrow"
            />
          </div>
          <div className={styles.container__left__sizes__size}>
            {[
              'XX-Small','X-Small','Small','Medium','Large','X-Large','XX-Large','3X-Large','4X-Large'
            ].map((sz) => (
              <div
                key={sz}
                className={
                  sz === 'Large'
                    ? `${styles.container__left__sizes__size__item} ` +
                      styles['container__left__sizes__size__item--black']
                    : styles.container__left__sizes__size__item
                }
              >
                {sz}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.container__left__split} />

        <div className={styles.container__left__style}>
          <div className={styles.container__left__style__titles}>
            <p className={styles.container__left__style__titles__title}>Dress Style</p>
            <Image
              className={styles.container__left__style__titles__img}
              src="/udirect.png"
              width={11.5}
              height={6.5}
              alt="Style arrow"
            />
          </div>
          <div className={styles.container__left__style__list}>
            {['Casual','Formal','Party','Gym'].map((style) => (
              <div
                key={style}
                className={styles.container__left__style__list__category}
              >
                <p className={styles.container__left__style__list__category__text}>
                  {style}
                </p>
                <Image
                  className={styles.container__left__style__list__category__img}
                  src="/rdirect.png"
                  width={7}
                  height={12}
                  alt={`${style} arrow`}
                />
              </div>
            ))}
          </div>
        </div>

        <button className={styles.container__left__button}>Apply Filter</button>
        </div>
        <div className={styles.container__right}>
          <div className={styles.container__right__titles}>
            <h5 className={styles.container__right__titles__title}>Casual</h5>
            <div className={styles.container__right__titles__right}>
              <p className={styles.container__right__titles__right__amount}>
                Showing 1-10 of 100 Products
              </p>
              <p className={styles.container__right__titles__right__sort}>
                Sort By:{" "}
                <span className={styles.container__right__titles__right__black}>
                  Most Popular
                  <Image
                    className={styles.container__right__titles__right__img}
                    src="/ddirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </span>
              </p>
              <div className={styles.container__right__titles__right__filter}></div>
            </div>
          </div>
          <div className={styles.container__right__products}>
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
            <div className={styles.container__right__bottom}>
            <div className={styles.container__right__bottom__left}>
              <Image
                className={styles.container__right__bottom__left__img}
                src="/leftarrow.png"
                width={12}
                height={12}
                alt=""
              />
              <p className={styles.container__right__bottom__left__text}>Previous</p>
            </div>
            <div className={styles.container__right__bottom__middle}>
              <p className={`${styles.container__right__bottom__middle__text} ${styles['container__right__bottom__middle--black']}`}>1</p>
              <p className={styles.container__right__bottom__middle__text}>2</p>
              <p className={styles.container__right__bottom__middle__textres}>3</p>
              <p className={styles.container__right__bottom__middle__text}>...</p>
              <p className={styles.container__right__bottom__middle__textres}>8</p>
              <p className={styles.container__right__bottom__middle__text}>9</p>
              <p className={styles.container__right__bottom__middle__text}>10</p>
            </div>
            <div className={styles.container__right__bottom__right}>
              <p className={styles.container__right__bottom__right__text}>Next</p>
              <Image
                className={styles.container__right__bottom__right__img}
                src="/rightarrow.png"
                width={12}
                height={12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CategoryProducts;
