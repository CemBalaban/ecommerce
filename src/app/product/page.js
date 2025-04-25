import Image from "next/image";
import ReviewList from "../../component/elements/ReviewList";
import Itemlist from "../../component/elements/Itemlist";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail.",
    stars: 4.5,
    verified: true,
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
    stars: 4,
    verified: true,
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    stars: 3.5,
    verified: true,
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    stars: 3.5,
    verified: true,
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    stars: 4,
    verified: true,
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    stars: 4.5,
    verified: true,
  },
];

const mightLike = [
  {
    title: "Polo with Contrast Trims",
    imageClass: "contrastpolo",
    rating: 4,
    salePrice: 212,
    originalPrice: 232,
    discount: 20,
    isResponsive: false,
  },
  {
    title: "Gradient Graphic T-shirt",
    imageClass: "gradientgraphic",
    rating: 3.5,
    originalPrice: 145,
    isResponsive: false,
  },
  {
    title: "Polo with Tipping Details",
    imageClass: "tippingpolo",
    rating: 4.5,
    originalPrice: 180,
    isResponsive: false,
  },
  {
    title: "Black Striped T-shirt",
    imageClass: "blackstriped",
    rating: 5,
    salePrice: 120,
    originalPrice: 150,
    discount: 30,
    isResponsive: false,
  },
  {
    title: "Polo with Contrast Trims",
    imageClass: "contrastpolo",
    rating: 4,
    salePrice: 212,
    originalPrice: 232,
    discount: 20,
    isResponsive: true,
  },
  {
    title: "Gradient Graphic T-shirt",
    imageClass: "gradientgraphic",
    rating: 3.5,
    originalPrice: 145,
    isResponsive: true,
  },
];

export default function Product() {
  return (
    <>
      <section className="product">
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
                <p className="container__right__prices__dis__discount">-40%</p>
              </div>
            </div>
            <p className="container__right__desc">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
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
      <section className="tab">
        <div className="container">
          <div className="container__titles">
            <div className="container__titles__title">Product Details</div>
            <div className="container__titles__title container__titles--black">
              Rating & Reviews
            </div>
            <div className="container__titles__title">FAQs</div>
          </div>
          <div className="container__line">
            <div className="container__inline"></div>
          </div>
          <div className="container__top">
            <h4 className="container__top__title">
              All Reviews <span className="container__top__amount">(451)</span>
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
        </div>
        <section className="productdetails"></section>
        <ReviewList reviews={reviews} />
        <section className="faqs"></section>
      </section>
      <Itemlist title="YOU MIGHT ALSO LIKE" products={mightLike} />
    </>
  );
}
