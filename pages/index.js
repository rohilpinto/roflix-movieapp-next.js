// import firebase from "../firebase/init.firebase";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// firebase();


export default function Home(props) {
  return (
    <Paper>
      <Button>this is a button</Button>
      <Typography fontWeight={"bold"}>hellloooo latoo</Typography>
    </Paper>
  );
}

// export async function getServerSideProps(props) {
//   return {
//     props: {},
//   };
// }
