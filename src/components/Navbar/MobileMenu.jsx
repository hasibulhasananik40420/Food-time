import  { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
   <div className="">
     <div  className="lg:hidden block ">
      {isOpen ? (
        <RxCross2 className="hidden" onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#64ffda] cursor-pointer overflow-hidden group"
      >
        <span className="w-full h-[2px] bg-bodyColor inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[2px] bg-bodyColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[2px] bg-bodyColor inline-flex transform  translate-x-1 group-hover:translate-x-3  transition-all ease-in-out duration-300"></span>
      </div>


      )}
      {isOpen && (
        <div
         
          className="bg-bodyBlue z-0 w-3/4 custom-scroll top-0 right-0 max-h-screen absolute p-2 overflow-y-auto"
        >
          <div className="">
            <div className="cursor-pointer sticky top-2 z-50">
            <RxCross2 className="text-3xl hover:text-red-600 duration-200" onClick={() => setIsOpen(!isOpen)} />
            
            </div>

           
            <div className="min-h-screen">
              <ul className=" mt-8 z-0 flex flex-col gap-1">
                <li className="sm-menu-style bg-[#FF8B00] font-Poppins">
                  <Link
                    className="flex items-center "
                    to={"/"}
                  >
                    Home{" "}
                    
                  </Link>
                </li>
               <li className="sm-menu-style bg-[#FF8B00] font-Poppins">
                  <Link
                    className="flex items-center "
                    to={"/"}
                  >
                  Blog
                    
                  </Link>
                </li>
               <li className="sm-menu-style bg-[#FF8B00] font-Poppins">
                  <Link
                    className="flex items-center "
                    to={"/"}
                  >
                   About us
                    
                  </Link>
                </li>
               <li className="sm-menu-style bg-[#FF8B00] font-Poppins">
                  <Link
                    className="flex items-center "
                    to={"/"}
                  >
                   En
                    
                  </Link>
                </li>
              
               
              
              
                
                
             
                
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
   </div>
  );
}
export default MobileMenu;
