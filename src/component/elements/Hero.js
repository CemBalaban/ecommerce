 
import styles from './Hero.module.css';
import Image from "next/image"; 
 
const Hero = () => {
  return (
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
  );
};
 
export default Hero;