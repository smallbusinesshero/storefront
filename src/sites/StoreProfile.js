import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import StoresService from "../services/stores";
import "./StoreProfile.css";
import Fab from "@material-ui/core/Fab";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";

const staticData = {
  id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
  name: { de_DE: "Golden Neukölln" },
  subTitle: { de_DE: "Künstler-Zubehör" },
  phone: "0421-123123123",
  description: {
    de_DE: `Bei golden! findest du alles, was dich glücklich macht.
    
    „Symbiose“ bringt es ganz gut auf den Punkt, wenn es um die Beschreibung des Ladens vom Mutter-Tochter-Duo Margret
    und Gisa Schleef geht. Alte und neue Produkte sind gleichwertig vereint. Nostalgie und Moderne können sich auf
    40qm Fläche entfalten. Dazwischen sprießen frische Blumen und Zimmerpflanzen. Die Inhaberinnen beweisen Geschmack
    bei der Gestaltung als auch bei der Produktauswahl in ihrem Laden.\n\ngolden! heißt das gemeinsame Projekt der
    beiden und ist in der Sonnenallee in Neukölln zu finden. Komm vorbei, lass dich inspirieren, gönn dir eine
    Kleinigkeit und mach es dir anschließend Zuhause gemütlich. Denn hier wird auf Qualität und Nachhaltigkeit
    geachtet. Da die alten gesammelten Schätzchen Einzelstücke sind, wechselt das Angebot stetig. Auch das
    Blumen- und Pflanzenangebot ist je nach Saison wechselnd. In golden! steckt Liebe und Herzblut zweier kreativer
    Unternehmer-Frauen.`
  },
  address: {
    streetName: "Sonnenallee",
    streetNumber: "64",
    postalCode: "12045",
    city: "Berlin",
    region: null,
    state: null,
    country: "DE"
  },
  neighborhood: ["Berlin West"],
  geoLocation: null,
  goods: [
    {
      name: "Kleine Tasche",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    },
    {
      name: "Große Tasche",
      price: 1400,
      image:
        "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    },
    {
      name: "Hamster",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
    }
  ],
  image:
    "https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
};

const StoreProfile = props => {
  const [storeData, setStoreData] = useState(null);
  const { storeId } = useParams();

  const [shorten, setShorten] = useState(true);

  const shortWordCount = 30;

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = () => {
    setStoreData(staticData);
    //const StoreServiceInstance = new StoresService();
    //StoreServiceInstance.getStore(storeId).then(setStoreData);
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

  return (
    <>
      {storeData ? (
        <>
          <div className="header">
            <div
              className="sp-header-background"
              style={{ backgroundImage: `url(${storeData.image})` }}
            ></div>
            <a href={`tel:${storeData.phone}`}>
              <Fab
                color="primary"
                aria-label="phone_enabled"
                className="sp__telephone-button"
              >
                <PhoneEnabledIcon />
              </Fab>
            </a>
          </div>
          <div className="sp__content">
            <div id="store-profile">
              <h1 className="sp__title">{storeData.name.de_DE}</h1>
              <h3 className="sp__subtitle">{storeData.subTitle.de_DE}</h3>

              <p className="sp__description">
                {shorten ? getShortenedText() : storeData.description.de_DE}
                {isShortened() &&
                  (shorten ? (
                    <>
                      <span>… </span>
                      <a
                        href=""
                        onClick={e => {
                          setShorten(false);
                          e.preventDefault();
                        }}
                      >
                        weiterlesen
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <a
                        href=""
                        onClick={e => {
                          setShorten(true);
                          e.preventDefault();
                        }}
                      >
                        weniger
                      </a>
                    </>
                  ))}
              </p>
            </div>

            <div className="sp_goods">
              {storeData.goods.map(good => (
                <div className="sp_goods-good">
                  <div className="sp_goods-good-image-wrapper">
                    <div
                      className="sp_goods-good-image"
                      style={{ backgroundImage: `url(${good.image})` }}
                    ></div>
                  </div>
                  <div className="sp_goods-good-info">
                    <div className="sp_goods-good-name">{good.name}</div>
                    <div className="sp_goods-good-price">
                      {good.price / 100} €
                    </div>
                  </div>
                  <div className="sp_goods-good-iconbar">
                    <span className="sp_goods-good-shopping-card">
                      <span className="material-icons">shopping_cart</span>
                    </span>
                    <span className="sp_goods-good-bookmark">
                      <span className="material-icons">bookmark</span>
                    </span>
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

StoreProfile.propTypes = {};

export default StoreProfile;
