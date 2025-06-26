import React from 'react';
import { useSelector } from 'react-redux';
import useHook from '../../App/useHook';
import {     RiErrorWarningFill, RiLoader2Fill } from "@remixicon/react";

const Movies = () => {

     const {loading, error, data} = useHook ("https://fakestoreapi.com/products")

    // const moviesList = useSelector((state) => state.movies.list)
    // const usersList = useSelector((state) => state.movies.userList)
    // console.log("movies: " + moviesList)
    // console.log("users: " + usersList)
    console.log(data)


  return (
     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Product List</h2>

      {loading && 
      <p className="text-blue-500  text-2xl text-center"><RiLoader2Fill  size={40} className='mx-auto'></RiLoader2Fill>Loading...</p>
      }
      {error && 
      <p className="text-red-500  text-2xl  text-center"><RiErrorWarningFill  size={40} className='mx-auto' ></RiErrorWarningFill>Error: {error}
      </p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
        data && data.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-200 rounded-lg shadow-md p-5 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              className="w-24 h-24 mb-2"
            />
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-700 mt-1 font-semibold">${item.price}</p>
            <span className="text-xs text-black mt-1 bg-gray-400 rounded-2xl p-1">⭐{item.rating.rate}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
