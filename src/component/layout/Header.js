 
import styles from './Header.module.css';
import Image from "next/image"; 
 
const Header = () => {
  return (
    <header className='header'>
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
                        className="container__direction__drct__iconres"
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
  );
};
 
export default Header;