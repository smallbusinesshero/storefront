import { Typography } from "@material-ui/core";
import AboutYourCards from "./AboutYouCards";

export default () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Hier kannst du dich
        <br /> vorstellen
      </Typography>
      <Typography variant="body2" gutterBottom>
        Wir empfehlen dir, hier ein Bild von dir (und/oder deinem Team) in
        deinem Laden einzufügen. Am besten wirkt es, wenn du dich ca. 1,5 Meter
        von der Kamera entfernt positionierst. Vermeide nach Möglichkeit
        Nahaufnahmen, denn sonst wirkt dein Bild auf der Seite zu groß.
      </Typography>
      <AboutYourCards />
    </>
  );
};
