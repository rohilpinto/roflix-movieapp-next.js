import React from "react";
import { Box } from "@mui/material";
import uniqueId from "lodash.uniqueid";

const Card = ({ items, render, ...props }) => {
  return (
    <>
      {items?.map((items) => {
        return (
          <React.Fragment {...props} key={uniqueId("randomid")}>
            {render(items)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Card;
