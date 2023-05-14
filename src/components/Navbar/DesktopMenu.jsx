import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

function DesktopMenu({ setSidebar }) {
  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}
      <ul className="flex gap-12 items-center">
        <li className="relative">
          <Link
            className="flex items-center text-[18px] text-[#3F3F3F] font-Poppins font-medium hover:text-[#FF8B00] duration-300"
            to={"/"}
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <Link
            className="flex items-center text-[18px] text-[#3F3F3F] font-Poppins font-medium hover:text-[#FF8B00] duration-300"
            to={"/"}
          >
            Blog
          </Link>
        </li>

        <li className="relative">
          <Link
            className="flex items-center text-[18px] text-[#3F3F3F] font-Poppins font-medium hover:text-[#FF8B00] duration-300"
            to={"/"}
          >
            About us
          </Link>
        </li>

        <li className="relative">
          <Link
            className="flex items-center text-[18px] text-[#3F3F3F] font-Poppins font-medium hover:text-[#FF8B00] duration-300 "
            to={"/"}
          >
            EN
            <MdKeyboardArrowDown className=""/>
          </Link>
        </li>

        <li className="flex gap-6 items-center">
          <div>
            <button className="bg-[#396C03] text-white font-Poppins font-medium w-[110px] h-[40px] rounded-full text-center hover:bg-[#FF8B00] hover:text-white duration-300">
              Login
            </button>
          </div>

          <div onClick={() => setSidebar(true)} className="cursor-pointer relative bg-[#396C03] h-[40px] w-[40px] rounded-full flex justify-center items-center ">
            <BsFillCartFill className="text-white text-xl" />
           
            <div className="absolute -top-1 -right-1 cursor-pointer bg-[#FF8B00]  w-5 h-5 rounded-full flex justify-center items-center">
              <span className=" text-white rouned-full text-sm">2</span>
            </div>
          </div>
        </li>

       
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
