import Image from "next/image";
import Itemlist from "../component/elements/Itemlist"
import Categorycard from "../component/elements/Categorycard";
import Testimonials from "../component/elements/Testimonials";
import Hero from "../component/elements/Hero";

const newArrivals = [
  {
    title: "T-shirt with Tape Details",
    imageClass: "tapetshirt",
    rating: 4.5,
    originalPrice: 120,
    isResponsive: false,
  },
  {
    title: "Skinny Fit Jeans",
    imageClass: "skinnyjean",
    rating: 3.5,
    salePrice: 240,
    originalPrice: 260,
    discount: 20,
    isResponsive: false,
  },
  {
    title: "Checkered Shirt",
    imageClass: "checkeredshirt",
    rating: 4.5,
    originalPrice: 240,
    isResponsive: false,
  },
  {
    title: "Sleeve Striped T-shirt",
    imageClass: "sleevetshirt",
    rating: 4.5,
    salePrice: 240,
    originalPrice: 160,
    discount: 30,
    isResponsive: false,
  },
  {
    title: "T-shirt with Tape Details",
    imageClass: "tapetshirt",
    rating: 4.5,
    originalPrice: 120,
    isResponsive: true,
  },
  {
    title: "Skinny Fit Jeans",
    imageClass: "skinnyjean",
    rating: 3.5,
    salePrice: 240,
    originalPrice: 260,
    discount: 20,
    isResponsive: true,
  },
];

const topSelling = [
  {
    title: "Vertical Striped Shirt",
    imageClass: "verticalstriped",
    rating: 4.5,
    salePrice: 212,
    originalPrice: 232,
    discount: 20,
    isResponsive: false,
  },
  {
    title: "Courage Graphic T-shirt",
    imageClass: "couragegraphic",
    rating: 3.5,
    originalPrice: 245,
    isResponsive: false,
  },
  {
    title: "Loose Fit Bermuda Shorts",
    imageClass: "loosefitbermuda",
    rating: 4.5,
    originalPrice: 80,
    isResponsive: false,
  },
  {
    title: "Faded Skinny Jeans",
    imageClass: "fadedskinny",
    rating: 4.5,
    originalPrice: 210,
    isResponsive: false,
  },
  {
    title: "Vertical Striped Shirt",
    imageClass: "verticalstriped",
    rating: 4.5,
    salePrice: 212,
    originalPrice: 232,
    discount: 20,
    isResponsive: true,
  },
  {
    title: "Courage Graphic T-shirt",
    imageClass: "couragegraphic",
    rating: 3.5,
    originalPrice: 245,
    isResponsive: true,
  },
];

const comments = [
  {
    name: "Sarah M.",
    stars: 5,
    verified: true,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    blur: false,
  },
  {
    name: "Alex K.",
    stars: 4,
    verified: true,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    blur: false,
  },
  {
    name: "James L.",
    stars: 5,
    verified: true,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    blur: false, 
  },
  {
    name: "Mooen",
    stars: 5,
    verified: true,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    blur: true, 
  },
];
export default function Home() {
  return (
    <>
        <Hero />
        <section className="brands">
          <div className="container">

            <div className="container__versace"></div>

            <div className="container__zara"></div>

            <div className="container__gucci"></div>

            <div className="container__prada"></div>

            <div className="container__ck"></div>

          </div>
        </section>
        <Itemlist title="NEW ARRIVALS" products={newArrivals} />

        <div className="home__line"></div>

        <Itemlist title="TOP SELLING" products={topSelling} />

        <Categorycard />

        <Testimonials testimonials={comments} />
    </>
  );
}
