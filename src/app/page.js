import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="introduction">
          <div className="container">
            <div className="container__left">
              <h1 className="container__left__title">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="container__left__desc">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="container__left__button">Shop Now</button>
              <div className="container__left__data">
                <div className="container__left__data__item">
                  <h4 className="container__left__data__item__title">200+</h4>
                  <p className="container__left__data__item__desc">
                    International Brands
                  </p>
                </div>
                <div className="container__left__data__item">
                  <h4 className="container__left__data__item__title">2,000+</h4>
                  <p className="container__left__data__item__desc">
                    High Quality Products
                  </p>
                </div>
                <div className="container__left__data__item">
                  <h4 className="container__left__data__item__title">
                    30,000+
                  </h4>
                  <p className="container__left__data__item__desc">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="container__right">
              <Image
                className="container__right__bstar"
                src="/bstar.png"
                width={104}
                height={104}
                alt=""
              ></Image>
              <Image
                className="container__right__lstar"
                src="/lstar.png"
                width={56}
                height={56}
                alt=""
              ></Image>
            </div>
          </div>
        </section>
        <section className="brands">
          <div className="container">
            <Image
              className="container__brand"
              src="/versace.png"
              width={166.48}
              height={33.16}
              alt=""
            ></Image>
            <Image
              className="container__brandres"
              src="/versaceres.png"
              width={116.74}
              height={23.25}
              alt=""
            ></Image>
            <Image
              className="container__brand"
              src="/zara.png"
              width={91}
              height={38}
              alt=""
            ></Image>
            <Image
              className="container__brandres"
              src="/zarares.png"
              width={63.81}
              height={26.65}
              alt=""
            ></Image>
            <Image
              className="container__brand"
              src="/gucci.png"
              width={156}
              height={36}
              alt=""
            ></Image>
            <Image
              className="container__brandres"
              src="/guccires.png"
              width={109.39}
              height={25.24}
              alt=""
            ></Image>
            <Image
              className="container__brand"
              src="/prada.png"
              width={194}
              height={32}
              alt=""
            ></Image>
            <Image
              className="container__brandres"
              src="/pradares.png"
              width={127}
              height={21}
              alt=""
            ></Image>
            <Image
              className="container__brand"
              src="/ck.png"
              width={206.79}
              height={33.35}
              alt=""
            ></Image>
            <Image
              className="container__brandres"
              src="/ckres.png"
              width={134.84}
              height={21.75}
              alt=""
            ></Image>
          </div>
        </section>
        <section className="newarrivals">
          <div className="container">
            <h2 className="container__title">NEW ARRIVALS</h2>
            <div className="container__products">
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__tapetshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    T-shirt with Tape Details
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__item__specs__price">
                    $120
                  </p>
                </div>
              </div>
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__tapetshirt"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    T-shirt with Tape Details
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.36}
                      height={15.47}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      4.5/
                      <span className="container__products__itemres__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__itemres__specs__price">
                    $120
                  </p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__skinnyjean"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Skinny Fit Jeans
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      3.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__item__specs__sale">
                    <p className="container__products__item__specs__sale__price container__products__item__specs__price">
                      $240
                    </p>
                    <p className="container__products__item__specs__sale__eprice">
                      $260
                    </p>
                    <p className="container__products__item__specs__sale__discount">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__skinnyjean"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    Skinny Fit Jeans
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.36}
                      height={15.47}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      4.5/
                      <span className="container__products__itemres__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__itemres__specs__sale">
                    <p className="container__products__itemres__specs__sale__price container__products__itemres__specs__price">
                      $240
                    </p>
                    <p className="container__products__itemres__specs__sale__eprice">
                      $260
                    </p>
                    <p className="container__products__itemres__specs__sale__discount">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__checkeredshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Checkered Shirt
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__item__specs__price">
                    $240
                  </p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__sleevetshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Sleeve Striped T-shirt
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__item__specs__sale">
                    <p className="container__products__item__specs__sale__price container__products__item__specs__price">
                      $240
                    </p>
                    <p className="container__products__item__specs__sale__eprice">
                      $160
                    </p>
                    <p className="container__products__item__specs__sale__discount">
                      -30%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="container__button">View All</button>
            <div className="container__line"></div>
          </div>
        </section>
        <section className="topseller">
          <div className="container">
            <h2 className="container__title">TOP SELLING</h2>
            <div className="container__products">
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__tapetshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Vertical Striped Shirt
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__item__specs__sale">
                    <p className="container__products__item__specs__sale__price container__products__item__specs__price">
                      $212
                    </p>
                    <p className="container__products__item__specs__sale__eprice">
                      $232
                    </p>
                    <p className="container__products__item__specs__sale__discount">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__verticalstriped"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    Vertical Striped Shirt
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      4.5/
                      <span className="container__products__itemres__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__itemres__specs__sale">
                    <p className="container__products__itemres__specs__sale__price container__products__itemres__specs__price">
                      $212
                    </p>
                    <p className="container__products__itemres__specs__sale__eprice">
                      $235
                    </p>
                    <p className="container__products__itemres__specs__sale__discount">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__skinnyjean"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Courage Graphic T-shirt
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      3.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__item__specs__price">
                    $145
                  </p>
                </div>
              </div>
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__couragegraphic"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    Courage Graphic T-shirt
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={15.47}
                      height={15.47}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      4.0/
                      <span className="container__products__itemres__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__itemres__specs__price">
                    $120
                  </p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__checkeredshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Loose Fit Bermuda Shorts
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__item__specs__price">$80</p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image__sleevetshirt"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Faded Skinny Jeans
                  </p>
                  <div className="container__products__item__specs__rate">
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__item__specs__rate__hstar"
                      src="/hstar.png"
                      width={7.79}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      4.5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__item__specs__price">
                    $210
                  </p>
                </div>
              </div>
            </div>
            <button className="container__button">View All</button>
          </div>
        </section>
        <section className="browseby">
          <div className="container">
            <h2 className="container__title">BROWSE BY DRESS STYLE</h2>
            <div className="container__direction">
              <button className="container__direction__littlebutton container__direction__casual">
                Casual
              </button>
              <button className="container__direction__bigbutton container__direction__formal">
                Formal
              </button>
              <button className="container__direction__bigbutton container__direction__party">
                Party
              </button>
              <button className="container__direction__littlebutton container__direction__gym">
                Gym
              </button>
            </div>
          </div>
        </section>
        <section className="customercomments">
          <div className="container">
            <div className="container__title">
              <h2 className="container__title__text">OUR HAPPY CUSTOMERS</h2>
              <div className="container__title__arrow">
                <Image
                  className="container__title__arrow__img"
                  src="/leftarrow.png"
                  width={15.76}
                  height={18.75}
                  alt=""
                ></Image>
                <Image
                  className="container__title__arrow__img"
                  src="/rightarrow.png"
                  width={15.76}
                  height={18.75}
                  alt=""
                ></Image>
              </div>
            </div>
            <div className="container__comments">
              <div className="container__comments__item">
                <div className="container__comments__item__container">
                  <div className="container__comments__item__container__rate">
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <h4 className="container__comments__item__container__name">
                    Sarah M.
                    <Image
                      className="container__comments__item__container__icon"
                      src="/confirmed.png"
                      width={19.5}
                      height={19.5}
                      alt=""
                    ></Image>
                  </h4>
                  <p className="container__comments__item__container__comment">
                    &quot;I&apos;m blown away by the quality and style of the
                    clothes I received from Shop.co. From casual wear to elegant
                    dresses, every piece I&apos;ve bought has exceeded my
                    expectations.&quot;
                  </p>
                </div>
              </div>
              <div className="container__comments__item">
                <div className="container__comments__item__container">
                  <div className="container__comments__item__container__rate">
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <h4 className="container__comments__item__container__name">
                    Alex K.
                    <Image
                      className="container__comments__item__container__icon"
                      src="/confirmed.png"
                      width={19.5}
                      height={19.5}
                      alt=""
                    ></Image>
                  </h4>
                  <p className="container__comments__item__container__comment">
                    &quot;Finding clothes that align with my personal style used
                    to be a challenge until I discovered Shop.co. The range of
                    options they offer is truly remarkable, catering to a
                    variety of tastes and occasions.&quot;
                  </p>
                </div>
              </div>
              <div className="container__comments__item">
                <div className="container__comments__item__container">
                  <div className="container__comments__item__container__rate">
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <h4 className="container__comments__item__container__name">
                    James L.
                    <Image
                      className="container__comments__item__container__icon"
                      src="/confirmed.png"
                      width={19.5}
                      height={19.5}
                      alt=""
                    ></Image>
                  </h4>
                  <p className="container__comments__item__container__comment">
                    &quot;As someone who&apos;s always on the lookout for unique
                    fashion pieces, I&apos;m thrilled to have stumbled upon
                    Shop.co. The selection of clothes is not only diverse but
                    also on-point with the latest trends.&qupt;
                  </p>
                </div>
              </div>
              <div className="container__comments__item blur">
                <div className="container__comments__item__container">
                  <div className="container__comments__item__container__rate">
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__comments__item__container__rate__star"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <h4 className="container__comments__item__container__name">
                    Mooen
                    <Image
                      className="container__comments__item__container__icon"
                      src="/confirmed.png"
                      width={19.5}
                      height={19.5}
                      alt=""
                    ></Image>
                  </h4>
                  <p className="container__comments__item__container__comment">
                    &quot;As someone who&apos;s always on the lookout for unique
                    fashion pieces, I&apos;m thrilled to have stumbled upon
                    Shop.co. The selection of clothes is not only diverse but
                    also on-point with the latest trends.&qupt;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
