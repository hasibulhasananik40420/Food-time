import { useEffect, useState } from "react";
import navImg from '../../assets/Group 1 (1).png'
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";
const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    
      <div className="">
        <nav className={`bg-[#F0F4EC] fixed top-0 z-50 w-full lg:px-12 px-6 border-b-[1px] border-b-gray-300 shadow lg:relative ${scrollPosition > 0 ? '!navbar-bg' : '!primary-navbar'}`}>
          <div className=" font-Merienda py-3  text-white   max-w-screen   max-w-container mx-auto">
            {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
            <div className="flex justify-between items-center">
              {/* Logo Here */}
              <div className="flex items-center">
                <img className="w-[141px] h-[46px]" src={navImg} alt="" />
              </div>

              <div>
                {/* Desktop Menu */}
                <DesktopMenu setSidebar={setSidebar} />

                {/* MobileMenu */}
                <div className="transition-transform duration-1000 ease-in">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;