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
}
