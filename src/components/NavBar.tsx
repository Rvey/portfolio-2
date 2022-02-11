import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showSettings = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

  };
  return (
    <nav className="relative flex mb-20 px-16 py-8 justify-between bg-transparent">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar-burger lg:hidden self-center"
      >
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
          <div
            className="inline-block text-sm text-white hover:underline font-heading h-6"
          
          >
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
