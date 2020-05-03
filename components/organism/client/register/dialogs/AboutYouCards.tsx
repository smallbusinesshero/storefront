import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

export default function AboutYouCards() {
  return (
    <>
      <Box width={1}>
        <br />
        <img
          src="/assets/images/register/dialogs/profile.jpg"
          title="Profile"
          width="100%"
        />
        <br />
        <br />
      </Box>
      <Typography variant="body2" gutterBottom>
        Wenn du ein bisschen kamerascheu bist, dann lade gerne einfach ein Bild
        vom Inneren deines Ladens hoch (siehe zweite Option). Wir fänden es
        schön, wenn dein Laden einen hohen optischen Wiedererkennungswert
        bekommt.
      </Typography>
      <Box width={1}>
        <br />
        <img
          src="/assets/images/register/dialogs/interior.jpg"
          title="Interior"
          width="100%"
        />
      </Box>
    </>
  );
}
