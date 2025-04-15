import Image from "next/image";

export default function Product() {
  return (
    <>
      <header className="topheader">
        <div className="container">
          <p className="container__desc">
            Sign up and get 20% off to your first order.{" "}
            <a className="container__drct">Sign Up Now</a>
          </p>
        </div>
      </header>
      <header className="header">
        <div className="container">
          <div className="container__logo">
            <h1 className="container__logo__text">SHOP.CO</h1>
          </div>
          <div className="container__menu">
            <a className="container__menu__drct">Shop</a>
            <a className="container__menu__drct">On Sale</a>
            <a className="container__menu__drct">New Arrivals</a>
            <a className="container__menu__drct">Brands</a>
          </div>
          <div className="container__search">
            <div className="container__searchsec">
              <Image
                className="container__search__img"
                src="/search_icon.png"
                width={24}
                height={24}
                alt=""
              />
              <input
                className="container__search__box"
                type="text"
                placeholder="Search for products..."
              ></input>
            </div>
          </div>
          <div className="container__direction">
            <button className="container__direction__drct">
              <Image
                className="container__direction__drct__icon"
                src="/cart.png"
                width={24}
                height={24}
                alt=""
              />
            </button>
            <button className="container__direction__drct">
              <Image
                className="container__direction__drct__icon"
                src="/profile.png"
                width={24}
                height={24}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="header__line"></div>
      </header>
      <main className="cart">
        <div className="cart__category">
          <p className="cart__category__text">
            Home{" "}
            <Image
              className="cart__category__img"
              src="/rdirect.png"
              width={7}
              height={12}
              alt=""
            ></Image>
          </p>
          <p className="cart__category__text cart__category__text--black">
            Cart
          </p>
        </div>
        <section className="page">
            <div className="container">
                <h4 className="container__title">YOUR CART</h4>
                <div className="container__bottom">
                    <div className="container__bottom__left">
                        <div className="container__bottom__left__item">
                            <div className="container__bottom__left__item__left container__bottom__left__item--gradient">

                            </div>
                            <div className="container__bottom__left__item__right">
                                <div className="container__bottom__left__item__right__left">
                                    <div className="container__bottom__left__item__right__left__top">
                                        <h5 className="container__bottom__left__item__right__left__top__title">Gradient Graphic T-shirt</h5>
                                        <p className="container__bottom__left__item__right__left__top__spec">Size: <span className="container__bottom__left__item__middle__top--faded">Large</span></p>
                                        <p className="container__bottom__left__item__right__left__top__spec">Color: <span className="container__bottom__left__item__middle__top--faded">White</span></p>
                                    </div>
                                    <h5 className="container__bottom__left__item__right__left__price">$145</h5>
                                </div>
                                <div className="container__bottom__left__item__right__side">
                                    <Image
                                        className="container__bottom__left__item__right__side__img"
                                        src="/garbage.png"
                                        width={18}
                                        height={19.5}
                                       alt=""
                                    ></Image>
                                    <div className="container__bottom__left__item__right__side__amounts">
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
                                            src="/minus.png"
                                            width={15.62}
                                            height={1.98}
                                            alt=""
                                        ></Image>
                                        <p className="container__bottom__left__item__right__side__amounts__text">1</p>
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
                                            src="/plus.png"
                                            width={15.62}
                                            height={15.62}
                                            alt=""
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container__bottom__left__line"></div>
                        <div className="container__bottom__left__item">
                            <div className="container__bottom__left__item__left container__bottom__left__item--checkered">

                            </div>
                            <div className="container__bottom__left__item__right">
                                <div className="container__bottom__left__item__right__left">
                                    <div className="container__bottom__left__item__right__left__top">
                                        <h5 className="container__bottom__left__item__right__left__top__title">Checkered Shirt</h5>
                                        <p className="container__bottom__left__item__right__left__top__spec">Size: <span className="container__bottom__left__item__middle__top--faded">Medium</span></p>
                                        <p className="container__bottom__left__item__right__left__top__spec">Color: <span className="container__bottom__left__item__middle__top--faded">Red</span></p>
                                    </div>
                                    <h5 className="container__bottom__left__item__right__left__price">$180</h5>
                                </div>
                                <div className="container__bottom__left__item__right__side">
                                    <Image
                                        className="container__bottom__left__item__right__side__img"
                                        src="/garbage.png"
                                        width={18}
                                        height={19.5}
                                       alt=""
                                    ></Image>
                                    <div className="container__bottom__left__item__right__side__amounts">
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
                                            src="/minus.png"
                                            width={15.62}
                                            height={1.98}
                                            alt=""
                                        ></Image>
                                        <p className="container__bottom__left__item__right__side__amounts__text">1</p>
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
                                            src="/plus.png"
                                            width={15.62}
                                            height={15.62}
                                            alt=""
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container__bottom__left__line"></div>
                        <div className="container__bottom__left__item">
                            <div className="container__bottom__left__item__left container__bottom__left__item--skinny">

                            </div>
                            <div className="container__bottom__left__item__right">
                                <div className="container__bottom__left__item__right__left">
                                    <div className="container__bottom__left__item__right__left__top">
                                        <h5 className="container__bottom__left__item__right__left__top__title">Skinny Jeans</h5>
                                        <p className="container__bottom__left__item__right__left__top__spec">Size: <span className="container__bottom__left__item__middle__top--faded">Large</span></p>
                                        <p className="container__bottom__left__item__right__left__top__spec">Color: <span className="container__bottom__left__item__middle__top--faded">Blue</span></p>
                                    </div>
                                    <h5 className="container__bottom__left__item__right__left__price">$240</h5>
                                </div>
                                <div className="container__bottom__left__item__right__side">
                                    <Image
                                        className="container__bottom__left__item__right__side__img"
                                        src="/garbage.png"
                                        width={18}
                                        height={19.5}
                                       alt=""
                                    ></Image>
                                    <div className="container__bottom__left__item__right__side__amounts">
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
                                            src="/minus.png"
                                            width={15.62}
                                            height={1.98}
                                            alt=""
                                        ></Image>
                                        <p className="container__bottom__left__item__right__side__amounts__text">1</p>
                                        <Image
                                            className="container__bottom__left__item__right__side__amounts__img"
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
                    <div className="container__bottom__right">
                        <h5 className="container__bottom__right__title">Order Summary</h5>
                        <div className="container__bottom__right__prices">
                            <div className="container__bottom__right__prices__line">
                                <p className="container__bottom__right__prices__line__text">Subtotal</p>
                                <p className="container__bottom__right__prices__line__price">$565</p>
                            </div>
                            <div className="container__bottom__right__prices__line">
                                <p className="container__bottom__right__prices__line__text">Discount (-20%)</p>
                                <p className="container__bottom__right__prices__line__price container__bottom__right__prices__line--red">-$113</p>
                            </div>
                            <div className="container__bottom__right__prices__line">
                                <p className="container__bottom__right__prices__line__text">Delivery Fee</p>
                                <p className="container__bottom__right__prices__line__price">$15</p>
                            </div>
                            <div className="container__bottom__right__prices__split"></div>
                            <div className="container__bottom__right__prices__line">
                                <p className="container__bottom__right__prices__line__text container__bottom__right__prices__line--black">Total</p>
                                <p className="container__bottom__right__prices__line__price container__bottom__right__prices__line--biggerfont">$467</p>
                            </div>
                        </div>
                        <div className="container__bottom__right__promo">
                            <div className="container__bottom__right__promo__input">
                                <Image
                                    className="container__bottom__right__promo__input__img"
                                    src="/tag.png"
                                    width={21}
                                    height={21}
                                    alt=""
                                />
                                <input className="container__bottom__right__promo__input__section" placeholder="Add promo code"></input>
                            </div>
                            <button className="container__bottom__right__promo__button">Apply</button>
                        </div>
                        <button className="container__bottom__right__button">Go to Checkout <Image className="container__bottom__right__buttonimg" src="/rightarrowwhite.png" width={15.76} height={18.75} alt=""></Image></button>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <section className="uptodate">
        <div className="container">
          <div className="container__desc">
            <h2 className="container__desc__title">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="container__inputs">
            <div className="container__inputs__section">
              <Image
                className="container__inputs__section__img"
                src="/mail_icon.png"
                width={20.25}
                height={15.75}
                alt=""
              />
              <input
                className="container__inputs__section__input"
                type="text"
                placeholder="Enter your email address"
              ></input>
            </div>
            <button className="container__inputs__button">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
      <footer className="footer">
              <div className="container">
                <div className="container__top">
                  <div className="container__top__shopco">
                    <h1 className="container__top__shopco__title">SHOP.CO</h1>
                    <p className="container__top__shopco__desc">
                      We have clothes that suits your style and which you&apos;re
                      proud to wear. From women to men.
                    </p>
                    <div className="container__top__shopco__links">
                      <button className="container__top__shopco__links__button tw"></button>
                      <button className="container__top__shopco__links__button fb"></button>
                      <button className="container__top__shopco__links__button ig"></button>
                      <button className="container__top__shopco__links__button gh"></button>
                    </div>
                  </div>
                  <div className="container__top__right">
                    <div className="container__top__right__section">
                      <p className="container__top__right__section__title">COMPANY</p>
                      <div className="container__top__right__section__direction">
                        <a className="container__top__right__section__direction__drct">
                          About
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Feature
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Works
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Career
                        </a>
                      </div>
                    </div>
                    <div className="container__top__right__section container__top__right--marg">
                      <p className="container__top__right__section__title">HELP</p>
                      <div className="container__top__right__section__direction">
                        <a className="container__top__right__section__direction__drct">
                          Customer Support
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Delivery Details
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Terms & Conditions
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <div className="container__top__right__section">
                      <p className="container__top__right__section__title">FAQ</p>
                      <div className="container__top__right__section__direction">
                        <a className="container__top__right__section__direction__drct">
                          Account
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Manage Deliveries
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Orders
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Payments
                        </a>
                      </div>
                    </div>
                    <div className="container__top__right__section">
                      <p className="container__top__right__section__title">RESOURCES</p>
                      <div className="container__top__right__section__direction">
                        <a className="container__top__right__section__direction__drct">
                          Free eBooks
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Development Tutorial
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          How to - Blog
                        </a>
                        <a className="container__top__right__section__direction__drct">
                          Youtube Playlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container__line"></div>
                <div className="container__bottom">
                  <p className="container__bottom__desc">
                    Shop.co © 2000-2023, All Rights Reserved
                  </p>
                  <div className="container__bottom__payment">
                    <Image
                      className="container__bottom__payment__method"
                      src="/visa.png"
                      width={46}
                      height={30}
                      alt=""
                    ></Image>
                    <Image
                      className="container__bottom__payment__method"
                      src="/master.png"
                      width={46}
                      height={30}
                      alt=""
                    ></Image>
                    <Image
                      className="container__bottom__payment__method"
                      src="/paypal.png"
                      width={46}
                      height={30}
                      alt=""
                    ></Image>
                    <Image
                      className="container__bottom__payment__method"
                      src="/applepay.png"
                      width={46}
                      height={30}
                      alt=""
                    ></Image>
                    <Image
                      className="container__bottom__payment__method"
                      src="/googlepay.png"
                      width={46}
                      height={30}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </footer>
    </>
  );
}
