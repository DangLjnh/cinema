import { tmdbAPI, tvAPI } from "config/config";
import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const MovieSidebar = ({ category, movie }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center mb-8 upcoming-item gap-x-5" key={v4()}>
        <img
          src={
            category === tmdbAPI
              ? tmdbAPI.imageOriginal(movie.poster_path)
              : tvAPI.imageOriginalTV(movie.poster_path)
          }
          alt=""
          onClick={() =>
            navigate(
              category === tmdbAPI
                ? `../movie/${movie.id}`
                : `../tvshow/${movie.id}`
            )
          }
          className="w-[100px] h-[150px] object-cover rounded-lg cursor-pointer"
        />
        <div className="upcoming-item-content">
          <h3
            className="font-medium text-white cursor-pointer"
            onClick={() =>
              navigate(
                category === tmdbAPI
                  ? `../movie/${movie.id}`
                  : `../tvshow/${movie.id}`
              )
            }
          >
            {movie.title || movie.name}
          </h3>
          <p className="py-[15px] text-sm">
            {movie.release_date || movie.first_air_date}
          </p>
          <div className="flex items-center justify-center px-1 py-1 border rounded-full vote gap-x-2 border-blueLight w-[70px]">
            <span className="text-sm text-blueLight">
              {movie?.vote_average?.toFixed(1)}
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0312 1C13.0666 1 14.6926 5.69969 15.2795 7.50668C15.4141 7.92126 15.7943 8.20684 16.23 8.22162C18.1151 8.28556 23 8.55772 23 9.66144C23 10.7495 19.5188 13.4853 18.0955 14.5583C17.7427 14.8243 17.5982 15.2836 17.734 15.704C18.3132 17.4975 19.7048 22.1483 18.8117 22.8815C17.9323 23.6034 14.1749 20.7486 12.6485 19.5286C12.2692 19.2254 11.7305 19.2251 11.3511 19.528C9.82346 20.7477 6.06764 23.6035 5.25065 22.8815C4.41962 22.1471 5.73815 17.4816 6.28237 15.6949C6.40915 15.2786 6.26319 14.8287 5.91569 14.5668C4.4996 13.4997 1 10.7523 1 9.66144C1 8.55659 5.89498 8.285 7.77586 8.22142C8.20861 8.2068 8.58723 7.92462 8.72415 7.51385C9.32468 5.71216 10.9944 1 12.0312 1Z"
                stroke="#6680c0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSidebar;
