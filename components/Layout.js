import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Layout = ({ children }) => {
  return (
    <Box sx={{ bgcolor: "primary.extraDark" }}>
      <Navbar />

      <Box sx={{ mt: 2 }}>{children}</Box>

      {/* <Stack spacing={2} justifyContent={"center"} alignItems={"center"} sx={{ p: 2 }}>
        <Pagination count={5} variant="text" shape="rounded" color="primary" />
      </Stack> */}
    </Box>
  );
};

export default Layout;
