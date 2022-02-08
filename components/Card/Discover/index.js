/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import NextImage from "next/image";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Discover = ({ results: propResults }) => {
  const results = propResults;

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} sx={{ textAlign: "center" }}>
      <Box sx={{ width: "300px", p: 1 }}>
        {!isLoaded && "loading...."}

        <Box component={"img"} src={`https://image.tmdb.org/t/p/w300${results.poster_path}`} alt="poster" sx={!isLoaded ? { display: "none" } : { borderRadius: "10px", width: { sm: "100%", lg: "250px" }, textAlign: "center" }} onLoad={() => setIsLoaded(true)} />
      </Box>

      <Box sx={{ width: "200px", minHeight: "70px", textAlign: "center" }}>
        <Typography variant="h6" color="light.main">
          {results.title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Discover;
