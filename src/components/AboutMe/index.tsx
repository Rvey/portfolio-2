interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className="py-15 h-screen">
      <h1 className="font-bold text-white text-center text-5xl pt-20">
        About me
      </h1>
      <section className="flex justify-center items-center pb-20 lg:pb-40 lg:pt-20 2xl:py-40 overflow-hidden">
     
        <div className="container  px-4 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <h2 className="mb-12 lg:mb-20 text-5xl lg:text-center font-bold font-heading text-white">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <div className="flex items-center mb-8 pb-14 border-b border-gray-500">
                  <div className="px-4">
                    <p className="text-lg text-gray-200 text-center">
                      Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                      sit amet consectetur Lorem ipsum dolor sit amet
                      consectetur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
          <div className=" w-[22em] h-[32em] bg-yellow-300 ">
            <div className=" w-[22em] h-[32em] hover:translate-x-2 hover:translate-y-2 transition bg-slate-600">
                </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
