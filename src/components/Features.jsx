import { useQuery } from "@tanstack/react-query";
import customFetch from "../utils";
import heart from "../assets/Heart.png";
import { calcMovieRating } from "../features/CalcMovieRating";
import imdb from "../assets/imdb.png";
import rottenTomatoes from "../assets/rotten_tomatoes.png";
import chevronRight from "../assets/Chevron right.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Features = () => {
  const url = `/movie/top_rated?api_key=35d53b06ecff5627945333051bd3ec2d&language=en-US`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await customFetch(url);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center">
        <div className="loading"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <section className=" text-center">
        <h1 className=" text-6xl lg:text-9xl mb-5 text-red-500">404</h1>
        <h3 className=" text-3xl lg:text-5xl mb-8">Sorry, 404 Error</h3>
      </section>
    );
  }

  return (
    <div className=" relative">
      <div className=" w-[90vw] max-w-6xl mx-auto">
        <div className=" flex items-center justify-between">
          <h1 className=" text-2xl lg:text-[32px] font-bold ">
            Feature Movies
          </h1>
          <h1 className=" text-[#BE123C] text-lg font-normal flex items-center justify-center gap-2 cursor-pointer">
            See More
            <img src={chevronRight} alt="" />
          </h1>
        </div>

        <div className=" mt-11 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 justify-between ">
          {data?.results?.slice(0, 10).map((movie, index) => {
            return (
              <Link key={index} to={`/movie/${movie.id}`}>
                <div className=" relative" data-testid="movie-card">
                  <img
                    src={heart}
                    alt="heart"
                    className=" absolute top-3 lg:top-2 right-7 bg-[#7e7c92] p-1 rounded-full"
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt={movie.original_title}
                    className=" w-full lg:w-[250px] lg:h-[370px] rounded-md"
                    data-testid="movie-poster"
                  />

                  <p
                    className=" text-xs font-bold text-[#9CA3AF] mt-2"
                    data-testid="movie-release-date"
                  >
                    USA {movie.release_date}
                  </p>
                  <p
                    className=" text-lg font-bold mt-2"
                    data-testid="movie-title"
                  >
                    {movie.original_title}
                  </p>
                  <div className="flex items-center gap-9 mt-3">
                    <div className="flex items-center gap-2 ">
                      <img src={imdb} alt="imdb" />
                      <p className=" text-base font-normal text-black">
                        86.0 / 100
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <img src={rottenTomatoes} alt="Rotten Tomatoes" />
                      <p className="text-base font-normal text-black">
                        {calcMovieRating(movie.vote_average)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
