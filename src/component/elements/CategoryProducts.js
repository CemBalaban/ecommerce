import styles from "./CategoryProducts.module.css";
import Image from "next/image";
import ProductItem from "./ProductsItem";

const CategoryProducts = ({ products = []}) => {
  return (
      <div className="container__right__products">
        {products.map((product, index) => (
        <ProductItem key={index} {...product} />
        ))}
      </div>
  );
};

export default CategoryProducts;
