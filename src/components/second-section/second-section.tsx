import { productData } from "@/constant/product-data";
import Card from "../card/card";
import Heading from "../common/heading";

const SecondSection = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <Heading text="New Arrivals" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-x-12 gap-y-10 justify-items-center">
        {productData.map((item) => {
          return (
            <Card
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

export default SecondSection;
