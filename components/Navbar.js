import React from "react";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DESKTOP_NAVBAR_NAVIGATION_LIST } from "../const";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <Stack direction={"row"} spacing={5} justifyContent={"space-between"} p={2}>
      <Box>
        <IconButton>
          <MenuIcon sx={{ fontSize: "35px", color: "primary.light" }} />
        </IconButton>
      </Box>
      <Stack direction={"row"} spacing={5} justifyContent={"space-evenly"} alignItems={"center"}>
        <Stack direction={"row"} spacing={2}>
          {DESKTOP_NAVBAR_NAVIGATION_LIST.map((items) => (
            <Link key={items.id} href={items.path} passHref>
              <Button variant="text"> {items.pathName}</Button>
            </Link>
          ))}
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Box>
            {/* <Avatar
            alt="The image"
            src={"https://dummyimage.com/600x400/000/fff"}
            style={{
              width: 50,
              height: 50,
            }}
          /> */}
            <Button variant="contained">Login</Button>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
