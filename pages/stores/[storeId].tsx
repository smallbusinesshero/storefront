import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsService from "../../services/products";
import StoresService from "../../services/stores";
import Fab from "@material-ui/core/Fab";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link, Typography } from "@material-ui/core";
import { analyticsSocialMediaRef } from "../../services/analytics";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
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
    borderRadius: "10px 10px 0 0",
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
    borderRadius: "10px 10px 0 0",
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
    padding: "1em",
    fontWeight: "bold",
    textAlign: "left",
  },
  goodsGoodDescription: {
    padding: "1em",
    textAlign: "left",
  },
  goodsGoodPrice: {
    padding: "1em",
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

const StoreId = (props) => {
  const classes = useStyles();
  const [storeData, setStoreData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const router = useRouter();
  const [shorten, setShorten] = useState(true);
  const shortWordCount = 30;

  useEffect(() => {
    const { storeId } = router.query;
    console.log(router.query);
    if (storeId) {
      fetchStoreData(storeId);
      fetchProductsData(storeId);
    }
  }, [router.query.storeId]);

  const fetchProductsData = (storeId) => {
    console.log(storeId);
    const ProductsServiceInstance = new ProductsService();
    ProductsServiceInstance.getProducts(storeId).then(setProductsData);
  };

  const fetchStoreData = (storeId) => {
    const StoreServiceInstance = new StoresService();
    StoreServiceInstance.getStore(storeId).then(setStoreData);
  };

  const getShortenedText = () => {
    return storeData.description.de_DE
      .split(" ")
      .slice(0, shortWordCount)
      .join(" ");
  };

  const isShortened = () => {
    return storeData.description.de_DE.split(" ").length > shortWordCount;
  };

  const getAddress = () => {
    return `${storeData.address.streetName} ${storeData.address.streetNumber}, ${storeData.address.postalCode} ${storeData.address.city}`;
  };

  // Send events to google analytics if social-media link is clicked
  const analyticsEventHomepage = () => {
    analyticsSocialMediaRef("Homepage", storeData?.id);
  };
  const analyticsEventEmail = () => {
    analyticsSocialMediaRef("Email", storeData?.id);
  };
  const analyticsEventWhatsapp = () => {
    analyticsSocialMediaRef("Whatsapp", storeData?.id);
  };
  const analyticsEventInstagram = () => {
    analyticsSocialMediaRef("Instagram", storeData?.id);
  };
  const analyticsEventTelegram = () => {
    analyticsSocialMediaRef("Telegram", storeData?.id);
  };
  const analyticsEventTwitter = () => {
    analyticsSocialMediaRef("Twitter", storeData?.id);
  };
  const analyticsEventFacebook = () => {
    analyticsSocialMediaRef("Facebook", storeData?.id);
  };

  return (
    <>
      {storeData && productsData ? (
        <>
          <div className={classes.header}>
            <div
              className={classes.headerBackground}
              style={{ backgroundImage: `url(${storeData?.profileImageURL})` }}
            />
            <a href={`tel:${storeData.phone}`}>
              <Fab
                color="primary"
                aria-label="phone_enabled"
                className={classes.telephoneButton}
              >
                <PhoneEnabledIcon />
              </Fab>
            </a>
          </div>
          <div>
            <div id="store-profile" className={classes.storeProfile}>
              <Typography variant="h4" className={classes.title}>
                {storeData.name?.de_DE}
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                {storeData.shopOwnerName}
              </Typography>
              <Typography variant="body1" className={classes.subtitle}>
                {getAddress()}
              </Typography>

              <div className={classes.icons}>
                {storeData?.homepage && (
                  <a
                    onClick={analyticsEventHomepage}
                    href={storeData.homepage}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                )}
                {storeData?.email && (
                  <a
                    onClick={analyticsEventEmail}
                    href={`mailto:${storeData.email}`}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                )}
                {storeData?.whatsapp && (
                  <a
                    onClick={analyticsEventWhatsapp}
                    href={storeData.whatsapp}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                )}
                {storeData?.instagram && (
                  <a
                    onClick={analyticsEventInstagram}
                    href={storeData.instagram}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                {storeData?.telegram && (
                  <a
                    onClick={analyticsEventTelegram}
                    href={storeData.telegram}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTelegramPlane} />
                  </a>
                )}
                {storeData?.twitter && (
                  <a
                    onClick={analyticsEventTwitter}
                    href={storeData.twitter}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )}
                {storeData?.facebook && (
                  <a
                    onClick={analyticsEventFacebook}
                    href={storeData.facebook}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )}
              </div>

              <div className={classes.description}>
                <Typography variant="body2">
                  {shorten ? getShortenedText() : storeData.description.de_DE}
                  {isShortened() &&
                    (shorten ? (
                      <>
                        <span>… </span>
                        <Link
                          href=""
                          className={classes.readmore}
                          onClick={(e) => {
                            setShorten(false);
                            e.preventDefault();
                          }}
                        >
                          weiterlesen
                        </Link>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          href=""
                          className={classes.readmore}
                          onClick={(e) => {
                            setShorten(true);
                            e.preventDefault();
                          }}
                        >
                          weniger
                        </Link>
                      </>
                    ))}
                </Typography>
              </div>
            </div>
            <div className={classes.goods}>
              {productsData.map((good, index) => (
                <div className={classes.goodsGood} key={index}>
                  <div className={classes.goodsGoodImageWrapper}>
                    <div
                      className={classes.goodsGoodImage}
                      style={{
                        backgroundImage: `url(${good.masterVariant?.images[0]?.url})`,
                      }}
                    />
                  </div>
                  <div>
                    <Typography variant="h4" className={classes.goodsGoodName}>
                      {good.name?.de_DE}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.goodsGoodDescription}
                    >
                      {good.description?.de_DE}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.goodsGoodPrice}
                    >
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(good.price.value)}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Lade...</span>
        </>
      )}
    </>
  );
};

StoreId.propTypes = {};

export default StoreId;
