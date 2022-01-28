import React from "react";
import { Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DESKTOP_NAVBAR_NAVIGATION_LIST } from "../const";
import Link from "next/link";

const Navbar = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Box>
        <MenuIcon />
      </Box>
      <Box>
        {DESKTOP_NAVBAR_NAVIGATION_LIST.map((items) => (
          <Link key={items.id} href={items.path}>
            {items.pathName}
          </Link>
        ))}
      </Box>
    </Stack>
  );
};

export default Navbar;
