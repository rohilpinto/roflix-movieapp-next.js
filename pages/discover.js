import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import DiscoverCard from "../components/Card/Discover";


const Discover = (props) => {
  const [page, setPage] = useState(1);
  const [discoverResults, setDiscoverResults] = useState(props.data.results);

  // console.log(discoverResults, page);

  return (
    <div>
      <Card items={discoverResults} render={(discoverResults) => <DiscoverCard results={discoverResults} />} />
    </div>
  );
};

export default Discover;

export async function getServerSideProps() {
  const movieData = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6d6bb75c77e37b02d30cf6a423dffc23&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}&with_watch_monetization_types=flatrate`);

  return {
    props: {
      data: movieData.data,
    },
  };
}
