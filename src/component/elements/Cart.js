import styles from "./Cart.module.scss";
import Image from "next/image";

const Cart = () => {
  return (
    <section className={styles.cartpage}>
      <div className={styles.container}>
        <h4 className={styles.container__title}>YOUR CART</h4>
        <div className={styles.container__bottom}>
          <div className={styles.container__bottom__left}>
            <div className={styles.container__bottom__left__item}>
              <div
                className={`${styles.container__bottom__left__item__left} ${
                  styles.container__bottom__left__item__gradient
                }`}
              ></div>
              <div className={styles.container__bottom__left__item__right}>
                <div
                  className={styles.container__bottom__left__item__right__left}
                >
                  <div
                    className={
                      styles.container__bottom__left__item__right__left__top
                    }
                  >
                    <h5
                      className={
                        styles.container__bottom__left__item__right__left__top__title
                      }
                    >
                      Gradient Graphic T-shirt
                    </h5>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Size:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        Large
                      </span>
                    </p>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Color:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        White
                      </span>
                    </p>
                  </div>
                  <h5
                    className={
                      styles.container__bottom__left__item__right__left__price
                    }
                  >
                    $145
                  </h5>
                </div>
                <div
                  className={styles.container__bottom__left__item__right__side}
                >
                  <Image
                    className={
                      styles.container__bottom__left__item__right__side__img
                    }
                    src="/garbage.png"
                    width={18}
                    height={19.5}
                    alt=""
                  ></Image>
                  <div
                    className={
                      styles.container__bottom__left__item__right__side__amounts
                    }
                  >
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/minus.png"
                      width={15.62}
                      height={1.98}
                      alt=""
                    ></Image>
                    <p
                      className={
                        styles.container__bottom__left__item__right__side__amounts__text
                      }
                    >
                      1
                    </p>
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/plus.png"
                      width={15.62}
                      height={15.62}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container__bottom__left__line}></div>
            <div className={styles.container__bottom__left__item}>
              <div
                className={`${styles.container__bottom__left__item__left} ${
                  styles.container__bottom__left__item__checkered
                }`}
              ></div>
              <div className={styles.container__bottom__left__item__right}>
                <div
                  className={styles.container__bottom__left__item__right__left}
                >
                  <div
                    className={
                      styles.container__bottom__left__item__right__left__top
                    }
                  >
                    <h5
                      className={
                        styles.container__bottom__left__item__right__left__top__title
                      }
                    >
                      Checkered Shirt
                    </h5>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Size:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        Medium
                      </span>
                    </p>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Color:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        Red
                      </span>
                    </p>
                  </div>
                  <h5
                    className={
                      styles.container__bottom__left__item__right__left__price
                    }
                  >
                    $180
                  </h5>
                </div>
                <div
                  className={styles.container__bottom__left__item__right__side}
                >
                  <Image
                    className={
                      styles.container__bottom__left__item__right__side__img
                    }
                    src="/garbage.png"
                    width={18}
                    height={19.5}
                    alt=""
                  ></Image>
                  <div
                    className={
                      styles.container__bottom__left__item__right__side__amounts
                    }
                  >
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/minus.png"
                      width={15.62}
                      height={1.98}
                      alt=""
                    ></Image>
                    <p
                      className={
                        styles.container__bottom__left__item__right__side__amounts__text
                      }
                    >
                      1
                    </p>
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/plus.png"
                      width={15.62}
                      height={15.62}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container__bottom__left__line}></div>
            <div className={styles.container__bottom__left__item}>
              <div
                className={`${styles.container__bottom__left__item__left} ${
                  styles.container__bottom__left__item__skinny
                }`}
              ></div>
              <div className={styles.container__bottom__left__item__right}>
                <div
                  className={styles.container__bottom__left__item__right__left}
                >
                  <div
                    className={
                      styles.container__bottom__left__item__right__left__top
                    }
                  >
                    <h5
                      className={
                        styles.container__bottom__left__item__right__left__top__title
                      }
                    >
                      Skinny Jeans
                    </h5>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Size:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        Large
                      </span>
                    </p>
                    <p
                      className={
                        styles.container__bottom__left__item__right__left__top__spec
                      }
                    >
                      Color:{" "}
                      <span
                        className={
                          styles.container__bottom__left__item__middle__top__faded
                        }
                      >
                        Blue
                      </span>
                    </p>
                  </div>
                  <h5
                    className={
                      styles.container__bottom__left__item__right__left__price
                    }
                  >
                    $240
                  </h5>
                </div>
                <div
                  className={styles.container__bottom__left__item__right__side}
                >
                  <Image
                    className={
                      styles.container__bottom__left__item__right__side__img
                    }
                    src="/garbage.png"
                    width={18}
                    height={19.5}
                    alt=""
                  ></Image>
                  <div
                    className={
                      styles.container__bottom__left__item__right__side__amounts
                    }
                  >
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/minus.png"
                      width={15.62}
                      height={1.98}
                      alt=""
                    ></Image>
                    <p
                      className={
                        styles.container__bottom__left__item__right__side__amounts__text
                      }
                    >
                      1
                    </p>
                    <Image
                      className={
                        styles.container__bottom__left__item__right__side__amounts__img
                      }
                      src="/plus.png"
                      width={15.62}
                      height={15.62}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container__bottom__right}>
            <h5 className={styles.container__bottom__right__title}>
              Order Summary
            </h5>
            <div className={styles.container__bottom__right__prices}>
              <div className={styles.container__bottom__right__prices__line}>
                <p
                  className={
                    styles.container__bottom__right__prices__line__text
                  }
                >
                  Subtotal
                </p>
                <p
                  className={
                    styles.container__bottom__right__prices__line__price
                  }
                >
                  $565
                </p>
              </div>
              <div className={styles.container__bottom__right__prices__line}>
                <p
                  className={
                    styles.container__bottom__right__prices__line__text
                  }
                >
                  Discount (-20%)
                </p>
                <p
                  className={`${
                    styles.container__bottom__right__prices__line__price
                  } ${styles.container__bottom__right__prices__line__red}`}
                >
                  -$113
                </p>
              </div>
              <div className={styles.container__bottom__right__prices__line}>
                <p
                  className={
                    styles.container__bottom__right__prices__line__text
                  }
                >
                  Delivery Fee
                </p>
                <p
                  className={
                    styles.container__bottom__right__prices__line__price
                  }
                >
                  $15
                </p>
              </div>
              <div
                className={styles.container__bottom__right__prices__split}
              ></div>
              <div className={styles.container__bottom__right__prices__line}>
                <p
                  className={`${
                    styles.container__bottom__right__prices__line__text
                  } ${styles.container__bottom__right__prices__line__black}`}
                >
                  Total
                </p>
                <p
                  className={`${
                    styles.container__bottom__right__prices__line__price
                  } ${
                    styles.container__bottom__right__prices__line__biggerfont
                  }`}
                >
                  $467
                </p>
              </div>
            </div>
            <div className={styles.container__bottom__right__promo}>
              <div className={styles.container__bottom__right__promo__input}>
                <Image
                  className={styles.container__bottom__right__promo__input__img}
                  src="/tag.png"
                  width={21}
                  height={21}
                  alt=""
                />
                <input
                  className={
                    styles.container__bottom__right__promo__input__section
                  }
                  placeholder="Add promo code"
                ></input>
              </div>
              <button
                className={styles.container__bottom__right__promo__button}
              >
                Apply
              </button>
            </div>
            <button className={styles.container__bottom__right__button}>
              Go to Checkout{" "}
              <Image
                className={styles.container__bottom__right__buttonimg}
                src="/rightarrowwhite.png"
                width={15.76}
                height={18.75}
                alt=""
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
