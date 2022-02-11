interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
<section id="about" className="body-font h-screen">
  <div className="py-24 mx-auto flex flex-col justify-center">
    <div className="lg:w-[92%] mx-auto">
      <div className="rounded-lg h-34 overflow-hidden">
      <div className="text-left mb-10">
          <h2 className="text-5xl font-bold font-heading text-gray-600 lg:ml-[4em]">
            <span className="border-b-4 border-yellow-300 py-3 ">Abo</span>ut Me
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 my-auto">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Redouane Bouabana</h2>
            <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
            <p className="text-base">A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel / PHP / VueJs and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.</p>
          </div>
        </div>
        <div className="flex lg:justify-end justify-center sm:w-2/5 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <div className="px-4">
          <div className="flex flex-wrap justify-center -mx-4">
          <div className=" lg:w-[22em] lg:h-[32em] w-[18em] h-[22em] bg-yellow-300 m-auto ">
            <div className=" lg:w-[22em] lg:h-[32em] w-[18em] h-[22em] translate-x-2 translate-y-2 transition bg-slate-600">
                </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default AboutMe;
