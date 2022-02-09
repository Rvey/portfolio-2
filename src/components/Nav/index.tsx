interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 px-px mb-px md:mb-0">
        <a
          className="flex justify-center items-center h-32 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:bg-opacity-50"
          href="#"
        >
          <div className="flex items-center text-sm">
            <span className="mr-2 text-white font-medium hover:underline font-heading">
              About me
            </span>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.51 3.26163H0.5V5.35394H12.51V8.4924L16.5 4.30778L12.51 0.123169V3.26163Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/3 px-px mb-px md:mb-0">
        <a
          className="flex justify-center items-center h-32 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:bg-opacity-50"
          href="#"
        >
          <div className="flex items-center text-sm">
            <span className="mr-2 text-white font-medium hover:underline font-heading">
              Projects
            </span>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.51 3.26163H0.5V5.35394H12.51V8.4924L16.5 4.30778L12.51 0.123169V3.26163Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/3 px-px">
        <a
          className="flex justify-center items-center h-32 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:bg-opacity-50"
          href="#"
        >
          <div className="flex items-center text-sm">
            <span className="mr-2 text-white font-medium hover:underline font-heading">
              Education
            </span>
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.51 3.26163H0.5V5.35394H12.51V8.4924L16.5 4.30778L12.51 0.123169V3.26163Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
