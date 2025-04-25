import Image from "next/image";

const ProductItem = ({ title, price, rating, imageClass, originalPrice, discount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const dynamicImageClass = `container__right__products__item__${imageClass}`;

  return (
    <div className="container__right__products__item">
    <div className={`container__right__products__item__image container__right__products__item__${imageClass}`}></div>
      <div className="container__right__products__item__specs">
        <p className="container__right__products__item__specs__title">{title}</p>
        <div className="container__right__products__item__specs__rate">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < Math.floor(rating)) {
              return (
                <Image
                  key={i}
                  className="container__right__products__item__specs__rate__fstar"
                  src="/fstar.png"
                  width={18.49}
                  height={18.49}
                  alt="Full Star"
                />
              );
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
              return (
                <Image
                  key={i}
                  className="container__right__products__item__specs__rate__hstar"
                  src="/hstar.png"
                  width={8.79}
                  height={16.72}
                  alt="Half Star"
                />
              );
            }
            return null;
          })}
          <p className="container__right__products__item__specs__rate__rates">
            {Number(rating).toFixed(1)}/
            <span className="container__right__products__item__specs__rate__faded">5</span>
          </p>
        </div>
        {originalPrice ? (
          <div className="container__right__products__item__specs__sale">
            <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
              ${price}
            </p>
            <p className="container__right__products__item__specs__sale__eprice">${originalPrice}</p>
            <p className="container__right__products__item__specs__sale__discount">-{discount}%</p>
          </div>
        ) : (
          <p className="container__right__products__item__specs__sale__price container__right__products__item__specs__price">
            ${price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
