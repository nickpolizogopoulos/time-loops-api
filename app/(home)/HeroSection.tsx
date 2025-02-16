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

              <button className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 20 20">
                    <path fill="currentColor" d="m2 10l1.42-1.41L9 14.17V2h2v12.17l5.59-5.58L18 10l-8 8z"/>
                </svg>
                Get Started
              </button>

              <button className="btn btn-neutral">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M14 1v7h7m0 15H3V1h12l3 3l3 3v16Z"/>
                </svg>
                Documentation
              </button>

            </div>
        </div>
    </section>   
  );
};

export default HeroSection;