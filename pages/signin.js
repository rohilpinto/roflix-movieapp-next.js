import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import GoogleButton from "react-google-button";
import Navbar from "../components/Navbar";
const Signin = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }} color="secondary.contrastText" textAlign={"center"}>
      <Stack alignItems={"center"} gap={2}>
        <Box sx={{ width: { xs: "auto", md: "350px" } }}>
          <Typography variant="h5" fontWeight={300}>
            In order to use this app please sign in using google
          </Typography>
        </Box>
        <Box>
          {/* <Button>Sign in with Google</Button> */}
          <GoogleButton />
        </Box>
      </Stack>
    </Box>
  );
};

export default Signin;

Signin.getLayout = (page) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};
