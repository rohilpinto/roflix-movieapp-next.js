<<<<<<< HEAD
import { useContext, useState } from "react";
import Head from "next/head";
import { MOVIE_DB_KEY } from "../const";
import app from "../firebase";
import { Box, Button, Paper, Typography } from "@mui/material";
import axios from "axios";

export default function Home(props) {
  return <Button>Login</Button>;
}

export async function getStaticProps() {
  return {};
=======
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
>>>>>>> 18252a55ad78204654e44de33ffc54409afda097
}

// export async function getServerSideProps(props) {
//   return {
//     props: {},
//   };
// }
