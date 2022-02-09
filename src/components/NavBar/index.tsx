import { useState } from "react";
import SideBar from "../SideBar";

interface NavBarProps {
    
}
 
const NavBar: React.FC<NavBarProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <nav className="relative flex mb-20 px-16 py-8 justify-between bg-transparent">
        <div>
          <a
            className="inline-block text-xl text-white font-medium font-heading"
            href="#"

          >
            Logo
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)
        } className="navbar-burger lg:hidden self-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="6" width="24" height="2" fill="white"></rect>
            <rect y="11" width="24" height="2" fill="white"></rect>
            <rect y="16" width="24" height="2" fill="white"></rect>
          </svg>
        </button>
        <div className="hidden lg:flex items-center">
          <div className="flex items-center">
            <a
              className="inline-block text-sm text-white hover:underline font-heading"
              href="#"
            >
              Contact me
            </a>
            <span className="mx-2 text-white">/</span>
            <a
              className="inline-block text-sm text-white hover:underline font-heading"
              href="#"
            >
              Download cv
            </a>
          </div>
        </div>
        {/* <SideBar open={isOpen} /> */}
      </nav>
     );
}
 
export default NavBar;