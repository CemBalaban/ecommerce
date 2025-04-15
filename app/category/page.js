import Image from "next/image";
import Link from "next/link";

export default function Category() {
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
          <Image className="container__logo__menuicon" src="/threeline.png" width={18.75} height={14.25} alt=""></Image>

            <h1 className="container__logo__text">SHOP.CO</h1>
          </div>
          <div className="container__menu">
            <a className="container__menu__drct" href="/product">
              Shop
            </a>
            <a className="container__menu__drct" href="/category">On Sale</a>
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
                src="/searchres.png"
                width={24}
                height={24}
                alt=""
              />
            </button>
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
      </header>
      <main className="catmain">
        <div className="catmain__category">
          <p className="catmain__category__text">
            Home{" "}
            <Image
              className="catmain__category__img"
              src="/rdirect.png"
              width={7}
              height={12}
              alt=""
            ></Image>
          </p>
          <p className="catmain__category__text catmain__category__text--black">
            Casual
          </p>
        </div>
        <section className="page">
          <div className="container">
            <div className="container__left">
              <div className="container__left__titles">
                <p className="container__left__titles__title">Filters</p>
                <Image
                  className="container__left__title__img"
                  src="/filter40.png"
                  width={20.25}
                  height={18.75}
                  alt=""
                ></Image>
              </div>
              <div className="container__left__split"></div>
              <div className="container__left__categories">
                <div className="container__left__categories__category">
                  <p className="container__left__categories__category__text">
                    T-shirts
                  </p>
                  <Image
                    className="container__left__categories__category__img"
                    src="/rdirect.png"
                    width={7}
                    height={12}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__categories__category">
                  <p className="container__left__categories__category__text">
                    Shorts
                  </p>
                  <Image
                    className="container__left__categories__category__img"
                    src="/rdirect.png"
                    width={7}
                    height={12}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__categories__category">
                  <p className="container__left__categories__category__text">
                    Shirts
                  </p>
                  <Image
                    className="container__left__categories__category__img"
                    src="/rdirect.png"
                    width={7}
                    height={12}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__categories__category">
                  <p className="container__left__categories__category__text">
                    Hoodie
                  </p>
                  <Image
                    className="container__left__categories__category__img"
                    src="/rdirect.png"
                    width={7}
                    height={12}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__categories__category">
                  <p className="container__left__categories__category__text">
                    Jeans
                  </p>
                  <Image
                    className="container__left__categories__category__img"
                    src="/rdirect.png"
                    width={7}
                    height={12}
                    alt=""
                  ></Image>
                </div>
              </div>
              <div className="container__left__split"></div>
              <div className="container__left__price">
                <div className="container__left__price__titles">
                  <p className="container__left__price__titles__title">Price</p>
                  <Image
                    className="container__left__price__titles__img"
                    src="/udirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__price__line">
                  <div className="container__left__price__line__circle"></div>
                  <div className="container__left__price__line--black"></div>
                  <div className="container__left__price__line__circle"></div>
                  <div className="container__left__price__line__prices">
                    <div className="container__left__price__line__prices__text">$50</div>
                    <div className="container__left__price__line__prices__text">$200</div>
                  </div>
                </div>
              </div>
              <div className="container__left__split"></div>
              <div className="container__left__colors">
                <div className="container__left__colors__titles">
                  <p className="container__left__colors__titles__title">
                    Colors
                  </p>
                  <Image
                    className="container__left__colors__titles__img"
                    src="/udirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__colors__color">
                  <div className="container__left__colors__color__item container__left__colors__color--green"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--red"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--yellow"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--orange"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--cyan"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--blue"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--purple"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--pink"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--white"></div>
                  <div className="container__left__colors__color__item container__left__colors__color--black"></div>
                </div>
              </div>
              <div className="container__left__split"></div>
              <div className="container__left__sizes">
                <div className="container__left__sizes__titles">
                  <p className="container__left__sizes__titles__title">Size</p>
                  <Image
                    className="container__left__sizes__titles__img"
                    src="/udirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__sizes__size">
                  <div className="container__left__sizes__size__item">
                    XX-Small
                  </div>
                  <div className="container__left__sizes__size__item">
                    X-Small
                  </div>
                  <div className="container__left__sizes__size__item">
                    Small
                  </div>
                  <div className="container__left__sizes__size__item">
                    Medium
                  </div>
                  <div className="container__left__sizes__size__item container__left__sizes__size__item--black">
                    Large
                  </div>
                  <div className="container__left__sizes__size__item">
                    X-Large
                  </div>
                  <div className="container__left__sizes__size__item">
                    XX-Large
                  </div>
                  <div className="container__left__sizes__size__item">
                    3X-Large
                  </div>
                  <div className="container__left__sizes__size__item">
                    4X-Large
                  </div>
                </div>
              </div>
              <div className="container__left__split"></div>
              <div className="container__left__style">
                <div className="container__left__style__titles">
                  <p className="container__left__style__titles__title">
                    Dress Style
                  </p>
                  <Image
                    className="container__left__style__titles__img"
                    src="/udirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__left__style__list">
                  <div className="container__left__style__list__category">
                    <p className="container__left__style__list__category__text">
                      Casual
                    </p>
                    <Image
                      className="container__left__style__list__category__img"
                      src="/rdirect.png"
                      width={7}
                      height={12}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__left__style__list__category">
                    <p className="container__left__style__list__category__text">
                      Formal
                    </p>
                    <Image
                      className="container__left__style__list__category__img"
                      src="/rdirect.png"
                      width={7}
                      height={12}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__left__style__list__category">
                    <p className="container__left__style__list__category__text">
                      Party
                    </p>
                    <Image
                      className="container__left__style__list__category__img"
                      src="/rdirect.png"
                      width={7}
                      height={12}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__left__style__list__category">
                    <p className="container__left__style__list__category__text">
                      Gym
                    </p>
                    <Image
                      className="container__left__style__list__category__img"
                      src="/rdirect.png"
                      width={7}
                      height={12}
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
              <button className="container__left__button">Apply Filter</button>
            </div>
            <div className="container__right">
              <div className="container__right__titles">
                <h5 className="container__right__titles__title">Casual</h5>
                <div className="container__right__titles__right">
                  <p className="container__right__titles__right__amount">
                    Showing 1-10 of 100 Products
                  </p>
                  <p className="container__right__titles__right__sort">
                    Sort By:{" "}
                    <span className="container__right__titles__right--black">
                      Most Popular
                      <Image
                        className="container__right__titles__right__img"
                        src="/ddirect.png"
                        width={11.5}
                        height={6.5}
                        alt=""
                      ></Image>
                    </span>
                  </p>
                  <div className="container__right__titles__right__filter"></div>
                </div>
              </div>
              <div className="container__right__products">
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--gradient"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Gradient Graphic T-shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__hstar"
                        src="/hstar.png"
                        width={7.79}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        3.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $145
                      </p>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--tipping"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Polo with Tipping Details
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__hstar"
                        src="/hstar.png"
                        width={7.79}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        4.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $180
                      </p>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--blackstriped"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Black Striped T-shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        5.0/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                    <div className="container__right__products__item__specs__sale">
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $120
                      </p>
                      <p className="container__right__products__item__specs__sale__eprice">
                        $150
                      </p>
                      <p className="container__right__products__item__specs__sale__discount">
                        -30%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--skinny"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Skinny Fit Jeans
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__hstar"
                        src="/hstar.png"
                        width={7.79}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        3.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                    <div className="container__right__products__item__specs__sale">
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $240
                      </p>
                      <p className="container__right__products__item__specs__sale__eprice">
                        $260
                      </p>
                      <p className="container__right__products__item__specs__sale__discount">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--checkered"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Checkered Shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__hstar"
                        src="/hstar.png"
                        width={7.79}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        4.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $180
                      </p>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--sleevestriped"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Sleeve Striped T-shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__hstar"
                        src="/hstar.png"
                        width={7.79}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        4.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                    <div className="container__right__products__item__specs__sale">
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $130
                      </p>
                      <p className="container__right__products__item__specs__sale__eprice">
                        $160
                      </p>
                      <p className="container__right__products__item__specs__sale__discount">
                        -30%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--verticalstriped"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Vertical Striped Shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        5.0/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                    <div className="container__right__products__item__specs__sale">
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $212
                      </p>
                      <p className="container__right__products__item__specs__sale__eprice">
                        $232
                      </p>
                      <p className="container__right__products__item__specs__sale__discount">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--courage"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Courage Graphic T-shirt
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        4.0/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $145
                      </p>
                  </div>
                </div>
                <div className="container__right__products__item">
                  <div className="container__right__products__item__image container__right__products__item--bermuda"></div>
                  <div className="container__right__products__item__specs">
                    <p className="container__right__products__item__specs__title">
                      Bermuda Shorts
                    </p>
                    <div className="container__right__products__item__specs__rate">
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <Image
                        className="container__right__products__item__specs__rate__fstar"
                        src="/fstar.png"
                        width={18.49}
                        height={18.49}
                        alt=""
                      ></Image>
                      <p className="container__right__products__item__specs__rate__rates">
                        3.5/
                        <span className="container__right__products__item__specs__rate__faded">
                          5
                        </span>
                      </p>
                    </div>
                      <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
                        $80
                      </p>
                  </div>
                </div>
              </div>
              <div className="container__right__split"></div>
              <div className="container__right__bottom">
                <div className="container__right__bottom__left">
                  <Image
                    className="container__right__bottom__left__img"
                    src="/leftarrow.png"
                    width={12}
                    height={12}
                    alt=""
                  ></Image> 
                  <p className="container__right__bottom__left__text">Previous</p>
                </div>
                <div className="container__right__bottom__middle">
                  <p className="container__right__bottom__middle__text container__right__bottom__middle--black">1</p>
                  <p className="container__right__bottom__middle__text">2</p>
                  <p className="container__right__bottom__middle__textres">3</p>
                  <p className="container__right__bottom__middle__text">...</p>
                  <p className="container__right__bottom__middle__textres">8</p>
                  <p className="container__right__bottom__middle__text">9</p>
                  <p className="container__right__bottom__middle__text">10</p>
                </div>
                <div className="container__right__bottom__right">
                  <p className="container__right__bottom__right__text">Next</p>
                  <Image
                    className="container__right__bottom__right__img"
                    src="/rightarrow.png"
                    width={12}
                    height={12}
                    alt=""
                  ></Image> 
                </div>
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
              <div className="container__top__right__section">
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
