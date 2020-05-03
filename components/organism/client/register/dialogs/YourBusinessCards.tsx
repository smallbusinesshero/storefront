import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

export default function YourBusinessCards() {
  return (
    <>
      <Box width={1}>
        <br />
        <img
          src="/assets/images/register/dialogs/front-1.jpg"
          title="Front 1"
          width="100%"
        />
        <br />
        <br />
      </Box>
      <Typography variant="body2" gutterBottom>
        Deine Bilder erscheinen auf der Website, wenn Kunden nach Läden in ihrer
        Nähe suchen.
      </Typography>
      <Box width={1}>
        <br />
        <img
          src="/assets/images/register/dialogs/front-2.jpg"
          title="Front 2"
          width="100%"
        />
      </Box>
    </>
  );
}
