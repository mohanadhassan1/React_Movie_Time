// import React from 'react'
import { useEffect, useState } from "react"
// import axiosInstance from "../../axiosConfig/instance";
import { Link } from "react-router-dom";

import { LiaStarSolid } from "react-icons/lia";
import { addToFav, removeFromFav } from "../../store/slices/handleFavourites";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../../store/slices/movies";


export default function Movies() {

    // const [movies, setMovies] = useState([]);
    
    const [page, setPages] = useState(1);
    const dispatch = useDispatch()

    const favorites = useSelector((state) => state.favourites.favourites)
    const movies =useSelector((state)=>state.movies.movies)


    // useEffect(() => {
    //     axiosInstance.get('/movie/popular', {
    //         params: {
    //             page: pages,
    //         }
    //     }).then((res) => {
    //         setMovies(res.data.results)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [pages]);



    useEffect(() => {
        dispatch(getMovies(page))
    }, [dispatch, page])
    


    const nextPage = () => {
        setPages(page + 1);
    };

    const previousPage = () => {
        if (page <= 1) {
            return;
        }
        setPages(page - 1);
    };
    


    const handleFavourites = (movie) => {
        if (favorites.find((item) => item.id == movie.id)) {
            dispatch(removeFromFav(movie.id))
        }
        else {
            dispatch(addToFav(movie))
        }

    }



    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Movies</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {movies.map((movie) => (
                        <Link key={movie.id} to={`/movies/details/${movie.id}`} >
                        <div className="group relative" >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    // src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 justify-between">
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg  leading-6 font-medium text-gray-900">{movie.title}</h3>
                                        <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); handleFavourites(movie) }} className="bg-transparent" ><LiaStarSolid className={`z-10 h-6 w-6 hover:text-yellow-500 ${favorites.find((item) => item.id == movie.id) ? 'text-yellow-500' : 'text-black'}  `} /></button>
                                    </div>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Lang : {movie.original_language}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Date : {movie.release_date}</p>

                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>

                <div className="flex justify-between mt-5">
                    <button
                        onClick={previousPage} disabled={page <= 1}
                        className="px-3 py-1 bg-indigo-600 text-white rounded-md font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Previous
                    </button>
                    <button
                        onClick={nextPage}
                        className="px-3 py-1 bg-indigo-600 text-white rounded-md font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
