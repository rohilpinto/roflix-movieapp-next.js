import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const useGetPopularMovies = (page) => {
  const fetchPopularMovies = async () => {
    const req = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=${page}`);

    return req;
  };

  const { data, status } = useQuery("", fetchPopularMovies);

  useEffect(() => {
    console.log(data);
  }, [page]);

  // return [data, error];
};

export default useGetPopularMovies;
