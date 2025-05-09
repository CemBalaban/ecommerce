import CategoryProducts from "@/src/component/elements/CategoryProducts";
import Image from "next/image";

const products = [
  {
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    imageClass: "gradient",
  },
  {
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    imageClass: "tipping",
  },
  {
    title: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: 30,
    rating: 5.0,
    imageClass: "blackstriped",
  },
  {
    title: "Skinny fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    imageClass: "skinny",
  },
  {
    title: "Checkered",
    price: 180,
    rating: 4.5,
    imageClass: "checkered",
  },
  {
    title: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    imageClass: "sleevestriped",
  },
  {
    title: "Vertical Striped shirt",
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    imageClass: "verticalstriped",
  },
  {
    title: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    imageClass: "courage",
  },
  {
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    imageClass: "bermuda",
  },
];

export default function Category() {
  return (
    <>
      <section className="page">
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
                  <div className="container__left__price__line__prices__text">
                    $50
                  </div>
                  <div className="container__left__price__line__prices__text">
                    $200
                  </div>
                </div>
              </div>
            </div>
            <div className="container__left__split"></div>
            <div className="container__left__colors">
              <div className="container__left__colors__titles">
                <p className="container__left__colors__titles__title">Colors</p>
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
                <div className="container__left__sizes__size__item">Small</div>
                <div className="container__left__sizes__size__item">Medium</div>
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
            <CategoryProducts products={products}/>
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
                <p className="container__right__bottom__middle__text container__right__bottom__middle--black">
                  1
                </p>
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
    </>
  );
}
