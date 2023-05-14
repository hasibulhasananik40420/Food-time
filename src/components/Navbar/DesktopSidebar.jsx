
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function DesktopSidebar({ setSidebar }) {
  const location = useLocation();
  return (
    <div
      
      className="fixed  top-20 right-0"
    >
            {/************* desktop sidebar section  start here ***************/}

      <div
        className={`p-4  z-50 sticky top-0 right-0 transition-all duration-300 ease-in ${
          location.pathname == "/" ? "sidebar-bg" : "bg-bodyColor"
        } w-[450px] min-h-screen max-h-screen`}
      >
        <div className="flex justify-end w-full cursor-pointer">
        <RxCross2 className="text-3xl text-red-600   transition-all  duration-300"  onClick={() => setSidebar(false)} />
         
        </div>

        <h1 className="text-3xl  pl-11 text-black">
         Your cart is <span className="text-[#f9c747]">Empty </span>{" "}
          Continue shopping <span className="text-red-500">click here</span>
        </h1>
        <h1 className="text-base  pl-11 mt-8 text-black">
          Nam libero tempore, cum soluta nobis eligendi cumque quod placeat
          facere possimus assumenda omnis dolor repellendu sautem temporibus
          officiis
        </h1>

      </div>

       {/************* desktop sidebar section  end here ***************/}
    </div>
  );
}

export default DesktopSidebar;
