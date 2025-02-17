import Endpoints from "./Endpoints";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import CTA from "./CTA";

const Home = () => {
  return (
    <main className='flex flex-col gap gap-0 sm:gap-12  px-5'>
      <HeroSection />
      <Endpoints />
      <Categories />
      <CTA />
    </main>
  );
};

export default Home;