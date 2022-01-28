import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import Image from "next/image";

const Discover = (props) => {
  const results = props.results;

  return (
    <Box sx={{ width: "200px" }}>
      <Image src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt="poster" width={200} height={300} />

      <Box>{results.title}</Box>
    </Box>
  );
};

export default Discover;
