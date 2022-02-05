import { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { firebaseInit } from "../firebase";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
    }
  });

  return (
    <>
      <Box>nothign here</Box>
    </>
  );
}
