import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  header: {
    position: "relative",
  },
  headerBackground: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "25em",
    clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
  },
  telephoneButton: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translateX(-50%)",
    color: "white",
  },
  readmore: {
    textDecoration: "none",
  },
  title: {
    color: theme.palette.primary.main,
    margin: 0,
    fontSize: "1.5em",
    textAlign: "center",
    fontWeight: 500,
  },
  subtitle: {
    fontSize: "1.3em",
    marginTop: "0",
    textAlign: "center",
    fontWeight: 300,
    marginBottom: "0",
    color: theme.palette.text.secondary,
  },
  description: {
    marginTop: 0,
    lineHeight: "1.4",
    color: theme.palette.text.secondary,
  },
  storeProfile: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    marginTop: "1rem",
    marginBottom: "24px",
  },
  goods: {
    display: "flex",
    flexWrap: "wrap",
  },
  goodsGood: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "calc(50% - 1em)",
    position: "relative",
    marginBottom: "3em",
    overflow: "hidden",
    "&:nth-child(even)": {
      marginLeft: "1em",
    },
    "&:nth-child(odd)": {
      marginRight: "1em",
    },
  },
  goodsGoodImageWrapper: {
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  },
  goodsGoodImage: {
    width: "100%",
    minWidth: "100%",
    height: "15em",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.6s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  goodsGoodName: {
    padding: "0 1em",
    fontWeight: "bold",
    textAlign: "left",
  },
  goodsGoodDescription: {
    padding: "0 1em",
    textAlign: "left",
  },
  goodsGoodPrice: {
    padding: "0 1em",
    color: theme.palette.primary.main,
    textAlign: "end",
    fontWeight: "bold",
  },
  icons: {
    padding: "0.5em 0",
    fontSize: "2em",
    textAlign: "center",
    "& a": {
      fontSize: "32px",
      color: theme.palette.primary.main,
      textDecoration: "none",
      padding: "0 0.5em",
    },
  },
}));
