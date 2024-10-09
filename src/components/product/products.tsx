import { ProductCard } from "@/constand/product-card-data";
import ProductsCard from "../card/products-card";
import Heading from "../common/heading";

const Products = () => {
  return (
    <div className="flex flex-col gap-y-12 justify-center items-center">
      <Heading text="Products" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-x-12 gap-y-10 justify-items-center">
        {ProductCard.map((item) => {
          return (
            <ProductsCard
              image={item.image.src}
              text={item.text}
              price={item.price}
              key={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
