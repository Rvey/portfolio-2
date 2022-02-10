
import Coding from "../../assests/User/Code.svg";
interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className="my-20 h-screen">
      <div className="text-left mb-10 ml-[15em]">
          <h2 className="text-5xl font-bold font-heading text-gray-300">
            <span className="border-b-4 border-yellow-300 py-3">Tech</span>nologies Stack
          </h2>
        </div>
      <section className="flex justify-center items-center pb-20 lg:pb-40 lg:pt-20 overflow-hidden">
        <div className="container  px-4 mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 mx-auto">
              <div className="flex flex-col gap-4 text-black">
                <div className="flex gap-4 ">
                  <div className="w-[10em] h-[10em] bg-green-200">html</div>
                  <div className="w-[10em] h-[10em] bg-green-200">js</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[10em] h-[10em] bg-green-200">react</div>
                  <div className="w-[10em] h-[10em] bg-green-200">vue</div>
                  <div className="w-[10em] h-[10em] bg-green-200">ts</div>
                </div>
                <div className="flex gap-4">
                  <div className="w-[10em] h-[10em] bg-green-200">nodejs</div>
                  <div className="w-[10em] h-[10em] bg-green-200">nextjs</div>
                  <div className="w-[10em] h-[10em] bg-green-200">php</div>
                  <div className="w-[10em] h-[10em] bg-green-200">laravel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <img src={Coding} className="w-[40em]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
