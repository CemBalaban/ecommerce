 
import styles from './TopHeader.module.css';
import Image from "next/image"; 
 
const TopHeader = () => {
  return (
    <header className="topheader">
        <div className="container">
        <p className="container__desc">
            Sign up and get 20% off to your first order.{" "}
            <a className="container__drct">Sign Up Now</a>
        </p>
        </div>
    </header>
  );
};
 
export default TopHeader;