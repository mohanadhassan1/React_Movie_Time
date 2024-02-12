// import React from 'react'

// import { IoStarOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../../store/slices/handleFavourites";

export default function Favourites() {

  const favorites = useSelector((state) => state.favourites.favourites);

  const dispatch = useDispatch()

  const handleFavourites = (movieId) => {
    dispatch(removeFromFav(movieId))
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Favourites</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favorites.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg  leading-6 font-medium text-gray-900">{movie.title}</h3>
                      <button onClick={() => handleFavourites(movie.id)} className="bg-transparent" ><FaTrash className={`z-10 h-6 w-6 hover:text-black ${favorites.find((item) => item.id == movie.id) ? 'text-red-500' : 'text-black'}  `} /></button>
                    </div>

                    <p className="mt-1 text-sm font-medium text-gray-500">Lang : {movie.original_language}</p>
                    <p className="mt-1 text-sm font-medium text-gray-500">Date : {movie.release_date}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
