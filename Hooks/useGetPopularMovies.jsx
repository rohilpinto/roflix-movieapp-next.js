import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetPopularMovies = (page) => {
  const [data, setData] = useState();
  const [error, setError] = useState({
    errorMessage: "",
    isError: false,
  });

  useEffect(() => {
    const abortContrl = new AbortController();

    const fetchPopularMovie = async () => {
      try {
        const popularMovieData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=${page}`, { signal: abortContrl.signal });
        setData(popularMovieData);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("abort error", error);
        } else {
          setError({ errorMessage: error, isError: true });
        }
      }
    };
    fetchPopularMovie();

    return () => abortContrl.abort();
  }, [page, error]);

  return [data];
};

export default useGetPopularMovies;
