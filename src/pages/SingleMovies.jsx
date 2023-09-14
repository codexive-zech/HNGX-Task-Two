import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { getDateInUtcFormate } from "../features/getUTCTime";
import star from "../assets/Star.png";
import { BiChevronDown } from "react-icons/bi";
import ticket from "../assets/Two_Tickets.png";
import list from "../assets/List.png";
import groupMovies from "../assets/Group_Movies.png";

const SingleMovies = () => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchSingleMovie = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setSingleMovie(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleMovie(
      `https://api.themoviedb.org/3/movie/${id}?api_key=35d53b06ecff5627945333051bd3ec2d&language=en-US`
    );
  }, [id]);

  const totalMinutes = singleMovie?.runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className=" flex items-center">
      <Sidebar />
      <div className="md:w-[70%]  px-3 overflow-x-hidden w-[100%] mt-8 rounded-lg">
        <img
          className="bg-center bg-cover bg-no-repeat object-cover w-[1198px] h-[449px] rounded-lg "
          src={`https://image.tmdb.org/t/p/original${
            singleMovie?.backdrop_path || singleMovie?.poster_path
          }`}
        />
        <div className=" flex-col md:flex-row flex md:items-center md:gap-5  md:justify-between w-full  font-[500]">
          <div className=" flex-col flex gap-3 md:mt-4 text-[10px] md:text-[17px] md:flex-row mt-4">
            <span data-testid="movie-title" className="flex gap-4">
              {singleMovie?.title}
              <span data-testid="movie-release-date">
                {getDateInUtcFormate(singleMovie?.release_date)}
              </span>
              <span data-testid="movie-runtime">
                {hours}h {minutes}m
              </span>
            </span>
          </div>

          <div className="text-[10px] md:text-[17px]">
            <span className="flex items-center  md:justify-end  text-[10px] gap-2">
              <img src={star} alt="star" className=" w-[30px] h-[30px]" />
              <div className=" flex items-center gap-4">
                <p className=" text-[#E8E8E8] text-[20px]">
                  {Number.parseFloat(singleMovie?.vote_average)}{" "}
                </p>{" "}
                <p className=" text-[#666] text-[20px]"> | 350k</p>
              </div>
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row    md:items-center w-full md:justify-between gap-5 flex-col ">
          <div className="w-full flex flex-col items-start">
            <p
              className="md:text-[15px] font-[400] leading-[30px] text-[20px] my-3"
              data-testid="movie-overview"
            >
              {singleMovie?.overview}
            </p>

            <div className="flex flex-col items-start md:flex-row gap-3">
              <button className="text-white bg-[#BE123C] rounded p-2 text-[20px] w-[220px] font-medium">
                Top rated movie #65
              </button>
              <div className="border-2 flex items-center justify-between rounded p-1.5 gap-2 text-[20px] font-medium">
                Awards 9 nominations
                <BiChevronDown />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3   mt-5 md:justify-center  md:items-center items-center">
            <button className="text-white bg-[#BE123C]  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={ticket} alt="Show Icon" width={20} height={20} />
              See Showtimes
            </button>
            <button className="text-black bg-red-200  flex items-center justify-center w-[200px] gap-2  rounded p-2 text-[14px]">
              <img src={list} alt="List Icon" />
              More watch options
            </button>
            <div>
              <img src={groupMovies} alt="Movies Group" width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovies;
