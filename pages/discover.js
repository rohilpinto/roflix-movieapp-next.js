import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import DiscoverCard from "../components/Card/Discover";

const Discover = () => {
  const [page, setPage] = useState(1);
  const [discoverResults, setDiscoverResults] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const movieData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=${page}`);

      console.log(movieData);

      setDiscoverResults(movieData.data.results);
    };
    fetchPopular();
  }, []);

  // console.log(discoverResults, page);

  return (
    <div>
      <Card items={discoverResults} render={(discoverResults) => <DiscoverCard results={discoverResults} />} />
    </div>
  );
};

export default Discover;
