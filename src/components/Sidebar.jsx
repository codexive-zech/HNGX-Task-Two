import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import calendar from "../assets/Calendar.png";
import movies from "../assets/Movie Projector.png";
import tvShow from "../assets/TV Show.png";
import logout from "../assets/Logout.png";
import home from "../assets/Home.png";

const Sidebar = () => {
  return (
    <div className="w-[20%]">
      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10  lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 rounded-tr-[3rem]"
      >
        <div className="px-6">
          <Link to="/" className="flex items-center gap-6 my-[20px]">
            <img src={logo} alt="Logo" className="w-[40px] h-[40px]" />
            <h1 className=" text-xl font-bold text-[#333]">MovieBox</h1>
          </Link>
        </div>
        <nav className="hs-accordion-group p-1 w-full flex flex-col flex-wrap mt-12">
          <ul className="flex flex-col md:gap-7 w-full gap-20 ">
            <li className="flex items-center gap-7 pl-5">
              <img src={home} alt="home icon" width={20} height={15} />
              <span className="hidden md:flex">Home</span>
            </li>

            <li className="flex items-center gap-7 bg-[#F8E7EB] py-3 relative pl-5">
              <img src={movies} alt="video icon" width={20} height={15} />
              <div className="bg-[#BE123C] absolute h-12  top-0 right-[-0.3rem] w-1"></div>
              <span className="hidden md:flex">Movies</span>
            </li>

            <li className="flex  gap-7  items-center  pl-5 ">
              <img src={tvShow} alt="tv show icon" width={20} height={15} />
              <span className="hidden md:flex">Tv series</span>
            </li>

            <li className="flex  gap-7  items-center  pl-5 ">
              <img src={calendar} alt="calander icon" width={20} height={15} />
              <span className="hidden md:flex">Upcoming</span>
            </li>

            <li className="bg-[#F8E7EB]  max-w-[170px]  rounded-3xl border-[1px] border-[#BE123C] md:flex md:justify-center flex-col md:items-center ml-5 hidden">
              <div>
                <p className="leading-[21px] xl:text-[16px] xl:w-[137px] text-[#333333] text-[14px]  mt-2 ml-4 ">
                  Play movie quizes and earn free tickets
                </p>
              </div>

              <p className="text-[12px] leading-[18px] font-[500] w-[139px] ">
                50k people are playing now
              </p>
              <button className="bg-[#f7c1ce] text-[#BE123C] rounded-full text-[10px] font-[700] p-1 w-[100px] my-2">
                start playing
              </button>
            </li>
            <li className="flex items-center pl-5  gap-7 mb-3">
              <img src={logout} alt="logout icon" width={20} height={20} />
              <span className="hidden md:flex">Log out</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
