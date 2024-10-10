import SecondSection from "@/components/second-section/second-section";
import OurStory from "../components/our-story/our-story";
import Hero from "@/components/hero/hero";
import Products from "@/components/product/products";
import Review from "@/components/review-section/review";
import Arrival from "@/components/new-arrival/arrival";
import SubFooter from "@/components/footer/sub-footer";

const HomeView = () => {
  return (
    <div className="flex flex-col gap-y-28">
      <Hero />
      <SecondSection />
      <OurStory />
      <Products />
      <Review />
      <Arrival />
      <SubFooter />
    </div>
  );
};

export default HomeView;
