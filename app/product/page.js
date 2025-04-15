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
          <Image className="container__logo__menuicon" src="/threeline.png" width={18.75} height={14.25} alt=""></Image>

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
        <div className="header__line"></div>
      </header>

      <main className="productmain">
        <div className="productmain__category">
          <p className="productmain__category__text">
            Home{" "}
            <Image
              className="productmain__category__img"
              src="/rdirect.png"
              width={7}
              height={12}
              alt=""
            ></Image>
          </p>
          <p className="productmain__category__text">
            Shop{" "}
            <Image
              className="productmain__category__img"
              src="/rdirect.png"
              width={7}
              height={12}
              alt=""
            ></Image>
          </p>
          <p className="productmain__category__text">
            Men{" "}
            <Image
              className="productmain__category__img"
              src="/rdirect.png"
              width={7}
              height={12}
              alt=""
            ></Image>
          </p>
          <p className="productmain__category__text productmain__category--black">
            T-shirts
          </p>
        </div>
        <section className="product">
          <div className="container">
            <div className="container__left">
              <div className="container__left__img container__left__side1"></div>
              <div className="container__left__img container__left__side2"></div>
              <div className="container__left__img container__left__side3"></div>
            </div>
            <div className="container__middle">
              <div className="container__middle__img"></div>
            </div>
            <div className="container__right">
              <h4 className="container__right__title">
                ONE LIFE GRAPHIC T-SHIRT
              </h4>
              <div className="container__right__rate">
                <Image
                  className="container__right__rate__fstar"
                  src="/fstar.png"
                  width={24.71}
                  height={24.71}
                  alt=""
                ></Image>
                <Image
                  className="container__right__rate__fstar"
                  src="/fstar.png"
                  width={24.71}
                  height={24.71}
                  alt=""
                ></Image>
                <Image
                  className="container__right__rate__fstar"
                  src="/fstar.png"
                  width={24.71}
                  height={24.71}
                  alt=""
                ></Image>
                <Image
                  className="container__right__rate__fstar"
                  src="/fstar.png"
                  width={24.71}
                  height={24.71}
                  alt=""
                ></Image>
                <Image
                  className="container__right__rate__hstar"
                  src="/hstar.png"
                  width={11.75}
                  height={24.71}
                  alt=""
                ></Image>
                <p className="container__right__rate__rates">
                  4.5/<span className="container__right__rate__faded">5</span>
                </p>
              </div>
              <div className="container__right__prices">
                <p className="container__right__prices__price">$260</p>
                <p className="container__right__prices__exprice">$300</p>
                <div className="container__right__prices__dis">
                  <p className="container__right__prices__dis__discount">
                    -40%
                  </p>
                </div>
              </div>
              <p className="container__right__desc">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
              <div className="container__line"></div>
              <p className="container__right__selcol">Select Colors</p>
              <div className="container__right__colorpicker">
                <div className="container__right__colorpicker__color container__right__colorpicker--brown"></div>
                <div className="container__right__colorpicker__color container__right__colorpicker--green"></div>
                <div className="container__right__colorpicker__color container__right__colorpicker--blue"></div>
              </div>
              <div className="container__line"></div>
              <p className="container__right__choosesize">Choose Size</p>
              <div className="container__right__sizes">
                <div className="container__right__sizes__size">
                  <p className="container__right__sizes__size__text">Small</p>
                </div>
                <div className="container__right__sizes__size">
                  <p className="container__right__sizes__size__text">Medium</p>
                </div>
                <div className="container__right__sizes__size container__right__sizes--black">
                  <p className="container__right__sizes__size__text container__right__sizes--white">
                    Large
                  </p>
                </div>
                <div className="container__right__sizes__size">
                  <p className="container__right__sizes__size__text">X-Large</p>
                </div>
              </div>
              <div className="container__line"></div>
              <div className="container__right__card">
                <div className="container__right__card__amount">
                  <Image
                    className="container__right__card__amount__img"
                    src="/minus.png"
                    width={19.75}
                    height={2.25}
                    alt=""
                  ></Image>
                  <p className="container__right__card__amount__text">1</p>
                  <Image
                    className="container__right__card__amount__img"
                    src="/plus.png"
                    width={18.75}
                    height={18.75}
                    alt=""
                  ></Image>
                </div>
                <div className="container__right__card__addto">
                  <p className="container__right__card__addto__text">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="review">
          <div className="container">
            <div className="container__titles">
              <h5 className="container__titles__title">Product Details</h5>
              <h5 className="container__titles__title container__titles--black">
                Rating & Reviews
              </h5>
              <h5 className="container__titles__title">FAQs</h5>
            </div>
            <div className="container__line">
              <div className="container__inline"></div>
            </div>
            <div className="container__top">
              <h4 className="container__top__title">
                All Reviews{" "}
                <span className="container__top__amount">(451)</span>
              </h4>
              <div className="container__top__right">
                <div className="container__top__right__filter"></div>
                <div className="container__top__right__ranking">
                  <p className="container__top__right__ranking__text">Latest</p>
                  <Image
                    className="container__top__right__ranking__img"
                    src="/ddirect.png"
                    width={11.5}
                    height={6.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__top__right__add">
                  <p className="container__top__right__add__text">
                    Write a Review
                  </p>
                </div>
              </div>
            </div>
            <div className="container__middle">
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__hstar"
                      src="/hstar.png"
                      width={10.74}
                      height={24.71}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">
                    Samantha D.
                  </p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;I absolutely love this t-shirt! The design is unique
                    and the fabric feels so comfortable. As a fellow designer, I
                    appreciate the attention to detail. It&apos;s become my
                    favorite go-to shirt.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 14, 2023
                  </p>
                </div>
              </div>
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">Alex M.</p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;The t-shirt exceeded my expectations! The colors are
                    vibrant and the print quality is top-notch. Being a UI/UX
                    designer myself, I&apos;m quite picky about aesthetics, and
                    this t-shirt definitely gets a thumbs up from me.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 15, 2023
                  </p>
                </div>
              </div>
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__hstar"
                      src="/hstar.png"
                      width={10.74}
                      height={24.71}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">
                    Ethan R.
                  </p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;This t-shirt is a must-have for anyone who appreciates
                    good design. The minimalistic yet stylish pattern caught my
                    eye, and the fit is perfect. I can see the designer&apos;s
                    touch in every aspect of this shirt.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 16, 2023
                  </p>
                </div>
              </div>
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">
                    Olivia P.
                  </p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;As a UI/UX enthusiast, I value simplicity and
                    functionality. This t-shirt not only represents those
                    principles but also feels great to wear. It&apos;s evident
                    that the designer poured their creativity into making this
                    t-shirt stand out.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 17, 2023
                  </p>
                </div>
              </div>
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">Liam K.</p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;This t-shirt is a fusion of comfort and creativity.
                    The fabric is soft, and the design speaks volumes about the
                    designer&apos;s skill. It&apos;s like wearing a piece of art
                    that reflects my passion for both design and fashion.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 18, 2023
                  </p>
                </div>
              </div>
              <div className="container__middle__cart">
                <div className="container__middle__cart__stars">
                  <div className="container__middle__cart__stars__star">
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__fstar"
                      src="/fstar.png"
                      width={22.58}
                      height={22.58}
                      alt=""
                    ></Image>
                    <Image
                      className="container__middle__cart__stars__star__hstar"
                      src="/hstar.png"
                      width={10.74}
                      height={24.71}
                      alt=""
                    ></Image>
                  </div>
                  <div className="container__middle__cart__stars__details"></div>
                </div>
                <div className="container__middle__cart__name">
                  <p className="container__middle__cart__name__text">Ava H.</p>
                  <Image
                    className="container__middle__cart__verify"
                    src="/confirmed.png"
                    width={19.5}
                    height={19.5}
                    alt=""
                  ></Image>
                </div>
                <div className="container__middle__cart__desc">
                  <p className="container__middle__cart__desc__text">
                    &quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing
                    a piece of design philosophy. The intricate details and
                    thoughtful layout of the design make this shirt a
                    conversation starter.&quot;
                  </p>
                  <p className="container__middle__cart__desc__dt">
                    Posted on August 19, 2023
                  </p>
                </div>
              </div>
            </div>
            <div className="container__bottom">
              <button className="container__bottom__button">
                Load More Reviews
              </button>
            </div>
          </div>
        </section>
        <section className="suggest">
          <div className="container">
            <h2 className="container__title">YOU MIGHT ALSO LIKE</h2>
            <div className="container__products">
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__contrastpolo"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    Polo with Contrast Trims
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      4.0/
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
                      $242
                    </p>
                    <p className="container__products__itemres__specs__sale__discount">
                      -20%
                    </p>
                  </div>
                </div>
              </div>
              <div className="container__products__itemres">
                <div className="container__products__itemres__image container__products__itemres__image__gradientgraphic"></div>
                <div className="container__products__itemres__specs">
                  <p className="container__products__itemres__specs__title">
                    Gradient Graphic T-shirt
                  </p>
                  <div className="container__products__itemres__specs__rate">
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/fstar.png"
                      width={13.99}
                      height={13.99}
                      alt=""
                    ></Image>
                    <Image
                      className="container__products__itemres__specs__rate__fstar"
                      src="/hstar.png"
                      width={7.36}
                      height={13.99}
                      alt=""
                    ></Image>
                    <p className="container__products__itemres__specs__rate__rates">
                      3.5/
                      <span className="container__products__itemres__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <p className="container__products__itemres__specs__sale__price container__products__itemres__specs__price">
                    $145
                  </p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image--contrastpolo"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Polo with Contrast Trims
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
                    <p className="container__products__item__specs__rate__rates">
                      4.0/
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
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image--gradientgraph"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Gradient Graphic T-shirt
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
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image--tippingpolo"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Polo with Tipping Details
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
                    $180
                  </p>
                </div>
              </div>
              <div className="container__products__item">
                <div className="container__products__item__image container__products__item__image--blackstriped"></div>
                <div className="container__products__item__specs">
                  <p className="container__products__item__specs__title">
                    Black Striped T-shirt
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
                      className="container__products__item__specs__rate__fstar"
                      src="/fstar.png"
                      width={18.49}
                      height={18.49}
                      alt=""
                    ></Image>
                    <p className="container__products__item__specs__rate__rates">
                      5/
                      <span className="container__products__item__specs__rate__faded">
                        5
                      </span>
                    </p>
                  </div>
                  <div className="container__products__item__specs__sale">
                    <p className="container__products__item__specs__sale__price container__products__item__specs__price">
                      $120
                    </p>
                    <p className="container__products__item__specs__sale__eprice">
                      $150
                    </p>
                    <p className="container__products__item__specs__sale__discount">
                      -30%
                    </p>
                  </div>
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
