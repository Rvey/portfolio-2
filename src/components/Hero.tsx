import { Link } from "react-scroll";
import Trail from "../Hooks/useTrail";

const Hero: React.FC = () => {
  return (
    <div className="relative container mx-auto px-4 pb-24 md:pb-64">
      <div className="relative max-w-6xl mx-auto space-y-12">
        <span className="block mb-4 md:absolute top-0 right-0 text-gray-500 lg:text-lg font-semibold uppercase tracking-widest">
          Yep
        </span>
        <Trail open={true}>
        <h2 className="mb-6 md:mb-0 text-2xl sm:text-4xl md:text-6xl text-white uppercase font-heading space-y-5">
          <span>Hi I'am Redone</span>
          <span className="block md:text-7xl">full stack Web developer</span>
            </h2>
            </Trail>
        <Link
          className="inline-flex items-center py-4 px-6 bg-yellow-300 hover:bg-yellow-400 transform duration-200 cursor-pointer"
          to="contact" spy={true} smooth={true}
        >
          <svg
            className="mr-3"
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
              fill="black"
            ></path>
          </svg>
          <span className="text-sm uppercase font-heading">Contact me</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
