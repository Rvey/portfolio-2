interface SideBarProps {
    open: boolean;
}

const SideBar: React.FC<SideBarProps> = ({open}) => {
  return (
    <nav className={`${ open ? 'hidden' : 'flex' }  flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto z-10`}>
      <a
        className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
        href="#"
      ></a>
      <ul className="mb-32">
        <li className="mb-10">
          <a className="flex items-center" href="#">
            <span className="mr-3 text-lg text-white">About</span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </a>
        </li>
        <li className="mb-10">
          <a className="flex items-center" href="#">
            <span className="mr-3 text-lg text-white">Company</span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </a>
        </li>
        <li className="mb-10">
          <a className="flex items-center" href="#">
            <span className="mr-3 text-lg text-white">Services</span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a className="flex items-center" href="#">
            <span className="mr-3 text-lg text-white">Contact</span>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                fill="#FFEC3E"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
      <a
        className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
        href="#"
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
        <span className="text-sm font-medium uppercase tracking-wider">
          Sign Up
        </span>
      </a>
      <a
        className="flex mb-10 items-center text-white hover:underline"
        href="#"
      >
        <span className="mr-2 text-sm">Log In</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
            fill="#FFEC3E"
          ></path>
        </svg>
      </a>
      <p className="text-sm text-gray-500">All rights reserved © RedOne 2022</p>
    </nav>
  );
};

export default SideBar;
