import HeroSection from "./HeroSection";
import Endpoints from "./Endpoints";
import ProjectInformation from "./ProjectInformation";
import Categories from "./Categories";
import CTA from "./CTA";

const Home = () => {
  return (
    <main className='flex flex-col gap gap-0 sm:gap-10 px-5'>
      <HeroSection />
      <Endpoints />
      <ProjectInformation />
      <Categories />
      <CTA />
    </main>
  );
};

export default Home;