import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero min-h-80 py-10 lg:py-20">
        <div className="hero-content text-center flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Reliable API for Developers Who Demand Real Data
            </h1>

            <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, esse tempore recusandae neque quod vel officia cum sit magni tempora aspernatur magnam? Odio sed aut ipsa fugiat ullam quibusdam qui, aperiam libero saepe ad perspiciatis harum! Aperiam nostrum tempora corrupti reprehenderit aliquid omnis. Eveniet veritatis magni soluta nobis cumque corporis.
            </p>

            <div className="flex justify-center gap-7">

              <Link href='/docs' className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 1v7h7m0 15H3V1h12l3 3l3 3v16Z"/>
                </svg>
                Documentation
              </Link>

              <Link href='https://github.com/nickpolizogopoulos/time-loops-api' target='_blank' className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 432 416">
                  <path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/>
                </svg>
                Source Code
              </Link>

            </div>
        </div>
    </section>   
  );
};

export default HeroSection;