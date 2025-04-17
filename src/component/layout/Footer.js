 
import styles from './Footer.module.css';
import Image from "next/image"; 
 
const Footer = () => {
  return (
        <footer className="footer">
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
  );
};
 
export default Footer;