import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
import { getDateInUtcFormate } from "../features/getUTCTime";
import star from "../assets/Star.png";
import { BiChevronDown } from "react-icons/bi";
import ticket from "../assets/Two_Tickets.png";
import list from "../assets/List.png";
import groupMovies from "../assets/Group_movies.png";
import { GrFormPreviousLink } from "react-icons/gr";

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
  // const hours = Math.floor(totalMinutes / 60);
  // const minutes = totalMinutes % 60;

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
      <div className="md:w-[70%]  px-3 overflow-x-hidden w-[100%]  lg:mt-8 rounded-lg">
        <div className=" flex py-2 lg:hidden">
          <Link to="/">
            <GrFormPreviousLink size={45} />
          </Link>
        </div>
        <img
          className="bg-center bg-cover bg-no-repeat object-cover w-full lg:w-[1198px] lg:h-[449px] rounded-lg "
          src={`https://image.tmdb.org/t/p/original${
            singleMovie?.backdrop_path || singleMovie?.poster_path
          }`}
        />
        <div className=" flex-col lg:flex-row flex lg:items-center lg:gap-5  lg:justify-between w-full  font-[500]">
          <div className=" flex gap-2 lg:gap-5 md:mt-4 text-[10px] md:text-[17px] md:flex-row mt-4">
            <h1
              data-testid="movie-title"
              className="flex gap-4 text-sm lg:text-2xl"
            >
              {singleMovie?.title}
            </h1>
            <h1
              data-testid="movie-release-date"
              className="text-sm lg:text-2xl"
            >
              {getDateInUtcFormate(singleMovie?.release_date)}
            </h1>
            <h1 data-testid="movie-runtime" className="text-sm lg:text-2xl">
              {`${totalMinutes} Minutes`}
            </h1>
          </div>

          <div className="text-[10px] md:text-[17px] mt-4 md:mt-0">
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
        <div className="md:flex md:flex-row  md:items-start w-full md:justify-between gap-5 flex-col lg:mt-5 ">
          <div className="w-full flex flex-col items-start">
            <p
              className="md:text-[15px] font-[400] leading-[30px] text-[20px] my-3"
              data-testid="movie-overview"
            >
              {singleMovie?.overview}
            </p>

            <div className="flex flex-col gap-3 mt-5 items-start justify-start md:justify-center  md:items-center lg:mb-10">
              <button className="text-white bg-[#BE123C] rounded p-2 text-[20px] w-full lg:w-[220px] font-medium">
                Top rated movie #65
              </button>
              <div className="border-2 flex items-center justify-between rounded p-1.5 gap-2 text-[20px] font-medium">
                Awards 9 nominations
                <BiChevronDown />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5 items-start justify-start md:justify-center  md:items-center lg:mb-10">
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
