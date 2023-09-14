import { useQuery } from "@tanstack/react-query";
import logo from "../assets/logo.png";
import menu from "../assets/Menu.png";
import imdb from "../assets/imdb.png";
import rottenTomatoes from "../assets/rotten_tomatoes.png";
import pageArrow from "../assets/page_arrow.png";
import play from "../assets/play.png";
import { calcMovieRating } from "../features/CalcMovieRating";
import { BiSearch } from "react-icons/bi";
import customFetch from "../utils";
import { useState } from "react";

const Hero = () => {
  const [movieSlide, setMovieSlide] = useState(0);

  const movieActivateSlide = (index) => {
    setMovieSlide(index);
  };

  const url = `/movie/popular?api_key=35d53b06ecff5627945333051bd3ec2d&language=en-US`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["hero-movies"],
    queryFn: async () => {
      const { data } = await customFetch.get(url);
      return data;
    },
  });
  console.log(data);
  return (
    <div className=" relative">
      <div className=" w-full mx-auto mb-[70px]">
        {data?.results?.length > 0 && (
          <div className=" ">
            {data?.results?.slice(0, 5).map(
              (movie, index) =>
                movieSlide === index && (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${
                        movie.poster_path || movie.backdrop_path
                      })`,
                    }}
                    className=" bg-center bg-cover bg-no-repeat object-cover w-[1440px] h-[600px] max-w-full"
                  >
                    <div className=" flex items-center justify-between w-[90vw] mx-auto pt-4">
                      <div className=" flex items-center">
                        <img src={logo} alt="Logo" />
                        <h1 className=" text-2xl font-bold">MovieBox</h1>
                      </div>
                      <div className=" relative">
                        <input
                          type="text"
                          className="py-3 px-4 block w-[30vw] border-white rounded-md text-sm bg-transparent placeholder:text-white outline-white "
                          placeholder="What do you want to watch"
                        />
                        <BiSearch className=" absolute top-4 right-3 text-white cursor-pointer " />
                      </div>
                      <div className=" flex items-center justify-between gap-6">
                        <h1 className=" text-base font-bold text-white">
                          Sign in
                        </h1>
                        <img
                          src={menu}
                          alt="menu icon"
                          className=" w-[32px] h-[32px]"
                        />
                      </div>
                    </div>

                    <div className=" w-[90vw] max-w-6xl mx-auto mt-[100px] flex items-center justify-between">
                      <div className=" ">
                        <h1 className=" text-5xl font-bold leading-[99px] text-white">
                          {movie.original_title}
                        </h1>
                        <div className="flex items-center gap-9">
                          <div className="flex items-center gap-2 ">
                            <img src={imdb} alt="imdb" />
                            <p className=" text-base font-normal text-white">
                              86.0 / 100
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src={rottenTomatoes} alt="Rotten Tomatoes" />
                            <p className="text-base font-normal text-white">
                              {calcMovieRating(movie.vote_average)}
                            </p>
                          </div>
                        </div>
                        <p className=" text-base font-normal mt-4 w-[45%] text-white">
                          {movie.overview}
                        </p>
                        <button className=" bg-[#BE123C] px-4 py-[6px] flex items-center gap-2 rounded-md mt-4">
                          <img
                            src={play}
                            alt="Play"
                            className=" w-[20px] h-[20px]"
                          />
                          <p className=" text-sm font-bold uppercase text-white">
                            Watch trailer
                          </p>
                        </button>
                      </div>
                      <div className=" mr-[-50px]">
                        <ul className=" cursor-pointer">
                          {Array.from({ length: 5 }, (_, i) => i + 1).map(
                            (_, index) => (
                              <li
                                className="text-white font-[800] relative flex items-center "
                                key={index}
                                onClick={() => movieActivateSlide(index)}
                              >
                                <span
                                  className=" absolute left-[-23px] top-3
                            "
                                >
                                  {movieSlide === index && (
                                    <img src={pageArrow} alt="rectangle" />
                                  )}
                                </span>
                                <span className="pl-1">{index + 1}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
