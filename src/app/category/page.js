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
          <div className="container__right">
            <CategoryProducts products={products}/>
            <div className="container__right__split"></div>

          </div>
        </div>
      </section>
    </>
  );
}
