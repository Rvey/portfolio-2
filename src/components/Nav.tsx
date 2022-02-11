import { Link } from "react-scroll";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div className="flex flex-col flex-wrap z-10 ">
      <div className="w-full  px-px mb-px md:mb-0">
        <Link
          className="flex justify-center items-center h-32  bg-opacity-70 hover:bg-opacity-30 cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
        >
          <span className="mr-2 text-yellow-500 font-medium hover:underline font-heading rotate-90 ">
            ABOUT ME
          </span>
          <div className="flex items-center text-sm"></div>
        </Link>
      </div>
      <div className="w-full  px-px mb-px md:mb-0 ">
        <Link
          className="flex justify-center items-center h-32 bg-opacity-40  hover:bg-opacity-30 cursor-pointer "
          to="project"
          spy={true}
          smooth={true}
        >
          <div className="flex items-center text-sm">
            <span className="mr-2  font-medium hover:underline font-heading rotate-90  text-yellow-500">
              PROJECTS
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full  px-px">
        <Link
          className="flex justify-center items-center h-32 bg-opacity-40 cursor-pointer hover:bg-opacity-30 "
          to="skills"
          spy={true}
          smooth={true}
        >
          <div className="flex items-center text-sm">
            <span className="mr-2  font-medium hover:underline font-heading rotate-90 text-yellow-500">
              TECH STACK
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full  px-px mb-px md:mb-0">
        <Link
          className="flex justify-center items-center h-32 bg-opacity-40  hover:bg-opacity-30 cursor-pointer"
          to="contact"
          spy={true}
          smooth={true}
        >
          <div className="flex items-center text-sm">
            <span className="mr-2  font-medium hover:underline font-heading rotate-90 text-yellow-500">
          CONTACT ME            
          </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
