import React, { useState } from "react";
import { LOGO } from "../../assets";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", link: "#" },
    { label: "MENU", link: "#" },
    { label: "MAKE A RESERVATION", link: "#" },
    { label: "CONTACT US", link: "#" },
  ];

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#121618] relative h-24 w-full z-50">
      <div className="flex items-center justify-between pr-6 h-full">
        <div className="flex items-center space-x-4 ml-40 md:ml-20 lg:ml-40 mt-24">
          <img src={LOGO} alt="Logo" className="w-[86px] h-[76px]" />
          <div className="hidden md:flex flex-col justify-center text-white text-[35px] font-normal text-left">
            <span>
              <span className="text-[#0796EF]">DEEP</span>
              <span> NET</span>
            </span>
            <span className="text-[#857878]">SOFT</span>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-6 md:w-[1000px] xl:w-auto  xl:space-x-8 lg:mr-36  md:ml-20   mt-10 text-white">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="lg:text-[1rem] font-light tracking-widest hover:text-[#0796EF] transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuClick} className="text-[#857878]">
            <MdMenu className="w-10 h-10" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-[#121618] text-white shadow-lg">
          <ul className="flex flex-col items-center py-4 text-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  onClick={handleMenuClose}
                  className="text-sm font-light tracking-widest hover:text-[#0796EF] transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
