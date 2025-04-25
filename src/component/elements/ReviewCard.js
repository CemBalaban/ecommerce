import Image from "next/image";

const ReviewCard = ({ name, date, text, stars, verified }) => {
  return (
    <div className="container__middle__cart">
      <div className="container__middle__cart__stars">
        <div className="container__middle__cart__stars__star">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < Math.floor(stars)) {
              return (
                <Image
                  key={i}
                  className="container__middle__cart__stars__star__fstar"
                  src="/fstar.png"
                  width={22.58}
                  height={22.58}
                  alt=""
                />
              );
            } else if (i === Math.floor(stars) && stars % 1 !== 0) {
              return (
                <Image
                  key={i}
                  className="container__middle__cart__stars__star__hstar"
                  src="/hstar.png"
                  width={10.74}
                  height={24.71}
                  alt=""
                />
              );
            }
            return null;
          })}
        </div>
        <div className="container__middle__cart__stars__details"></div>
      </div>
      <div className="container__middle__cart__name">
        <p className="container__middle__cart__name__text">{name}</p>
        {verified && (
          <Image
            className="container__middle__cart__verify"
            src="/confirmed.png"
            width={19.5}
            height={19.5}
            alt=""
          />
        )}
      </div>
      <div className="container__middle__cart__desc">
        <p className="container__middle__cart__desc__text">&quot;{text}&quot;</p>
        <p className="container__middle__cart__desc__dt">Posted on {date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;