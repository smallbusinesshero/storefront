import { Typography } from "@material-ui/core";

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
      <Typography variant="body2" gutterBottom>
        PLACEHOLDER IMAGES
      </Typography>
      <Typography variant="body2">
        Wenn du ein bisschen kamerascheu bist, dann lade gerne einfach ein Bild
        vom Inneren deines Ladens hoch (siehe zweite Option). Wir fänden es
        schön, wenn dein Laden einen hohen optischen Wiedererkennungswert
        bekommt.
      </Typography>
    </>
  );
};
