import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetPopularMovies = (page) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchPopularMovie = async () => {
      const popularMovieData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=${page}`);

      setData(popularMovieData);
    };
    fetchPopularMovie();
  }, [page]);

  return [data];
};

export default useGetPopularMovies;
