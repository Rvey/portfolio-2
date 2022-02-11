import ProjectCard from "../Cards";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div id="project" className=" py-20 h-screen">
      <div className="text-left mb-10 ml-[15em]">
        <h2 className="text-5xl font-bold font-heading text-gray-300">
          <span className="border-b-4 border-yellow-300 py-3">Proj</span>ects
        </h2>
      
      </div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://dummyimage.com/820x340"
              />
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-white font-medium title-font mb-2">
                  Byte app
                </h2>
                <p className="leading-relaxed">
                 Desktop application to manage product and client 
                </p>
                <a className="mt-3 text-yellow-300 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://dummyimage.com/542x460"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-2">
                     Octobot
                    </h2>
                    <p className="leading-relaxed">
                     Music Discord bot 
                    </p>
                    <a className="mt-3 text-yellow-300 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://dummyimage.com/542x420"
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-white font-medium title-font mb-2">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a className="mt-3 text-yellow-300 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
