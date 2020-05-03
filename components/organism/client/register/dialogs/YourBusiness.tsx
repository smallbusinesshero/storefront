import { Typography } from "@material-ui/core";
import YourBusinessCards from "./YourBusinessCards";

export default () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Zeige uns deinen Laden
      </Typography>
      <Typography variant="body2" gutterBottom>
        Um einen hohen Wiedererkennungswert für deinen Laden zu schaffen, würden
        wir uns über ein einladendes Bild von der Außenseite deines Ladens
        freuen. Hier ein paar Beispiele zur Inspiration!
      </Typography>
      <YourBusinessCards />
    </>
  );
};
