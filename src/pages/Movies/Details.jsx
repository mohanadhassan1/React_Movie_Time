// import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import axiosInstance from '../../axiosConfig/instance'



const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Details() {


  const { id } = useParams()
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/movie/${id}`,{
    // axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}`, {
    }).then((res) => {
      setMovie(res.data);
    }).catch((err) => {
      console.log(err);
    })

  })


  return (
    <>
      {/* <div>Details id : {id}</div> */}

      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href={movie.id} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {movie.title}
                </a>
              </li>
            </ol>
          </nav>



          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                // src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                // src={movie.images[0].src}
                // alt={movie.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                  alt={movie.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={movie.images[2].src}
                  alt={movie.images[2].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div> */}
            </div>
            {/* <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500` + movie.production_companies.logo_path}
                alt={movie.title}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
          </div>




          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movie.original_title}</h1> */}
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movie.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">Vote Count : {movie.vote_count}</p>
              <p className="text-3xl tracking-tight text-gray-900">Vote Average : {movie.vote_average}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <StarIcon

                      className={classNames(
                        reviews.average > movie.adult ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>




              <form className="mt-10">
                {/* Highlights */}

                <div className="mt-10">
                  <div className=" items-center justify-between">
                    <h3 className="mb-3 font-medium text-gray-900">Highlights</h3>

                    <p className="text-sm text-gray-600">Language : {movie.original_language}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-10">
                  <div className=" items-center justify-between">
                    <h3 className="mb-3 font-medium text-gray-900">Details</h3>
                    {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a> */}
                    <p className="text-sm text-gray-600">Popularity : {movie.popularity}</p>
                    <p className="text-sm text-gray-600">Release Date : {movie.release_date}</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>



            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description :</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{movie.overview}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}
