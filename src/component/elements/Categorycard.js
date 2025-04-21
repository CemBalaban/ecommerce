import styles from './Categorycard.module.css';
import Image from "next/image"; 
 
const Categorycard = () => {
  return (
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
  );
};
 
export default Categorycard;