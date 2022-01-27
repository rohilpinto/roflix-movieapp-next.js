import React from "react";
import { Box } from "@mui/material";
import uniqueId from "lodash.uniqueid";

const Card = ({ items, render }) => {
  return (
    <Box>
      {items.map((items) => {
        return <React.Fragment key={uniqueId("randomid")}>{render(items)}</React.Fragment>;
      })}
    </Box>
  );
};

export default Card;
