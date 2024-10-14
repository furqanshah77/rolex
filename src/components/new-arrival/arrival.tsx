import { NewArrivalData } from "@/constant/new-arrival";
import NewArrival from "../card/new-arrival";
import Heading from "../common/heading";

const Arrival = () => {
  return (
    <div className="flex flex-col gap-y-14 justify-center items-center">
      <Heading text="New Arrival" className="text-center" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-x-12 gap-y-10 justify-items-center">
        {NewArrivalData.map((item) => {
          return (
            <NewArrival
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

export default Arrival;
