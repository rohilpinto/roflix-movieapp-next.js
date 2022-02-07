import React, { useState } from "react";
import NextImage from "next/image";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const Discover = ({ results: propResults }) => {
  const results = propResults;
  console.log(results);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Box sx={{ width: "300px", p: 1 }}>
        {!isLoaded && "loading...."}
        <Box>
          <NextImage src={`https://image.tmdb.org/t/p/w300${results.poster_path}`} alt="poster" width="300px" height="450px" style={!isLoaded ? { display: "none" } : {}} className="rounded-image" onLoadingComplete={() => setIsLoaded(true)} />
        </Box>
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
