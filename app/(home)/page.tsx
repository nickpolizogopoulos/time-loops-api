import Categories from "./Categories";
import CTA from "./CTA";
import Endpoints from "./Endpoints";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <main className='flex flex-col gap gap-0 sm:gap-10 px-5'>
      <HeroSection />
      <Endpoints />
      <Categories />
      <CTA />
    </main>
  );
};

export default Home;