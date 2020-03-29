import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import ProductsService from "../../services/products";
import StoresService from "../../services/stores";
import Fab from "@material-ui/core/Fab";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faWhatsapp,
	faTelegramPlane,
	faTwitter,
	faFacebook,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {Link} from "@material-ui/core";
import useStyles from "./styles";

const StoreId = props => {
	const classes = useStyles();
	const [storeData, setStoreData] = useState(null);
	const [productsData, setProductsData] = useState(null);
	const router = useRouter();
	const [shorten, setShorten] = useState(true);
	const shortWordCount = 30;

	useEffect(() => {
		const {storeId} = router.query;
		console.log(router.query);
		if(storeId) {
			fetchStoreData(storeId);
			fetchProductsData(storeId);
		}
	}, [router.query.storeId]);

	const fetchProductsData = (storeId) => {
		console.log(storeId)
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

	return (
		<>
			{storeData && productsData ? (
				<>
					<div className={classes.header}>
						<div
							className={classes.headerBackground}
							style={{backgroundImage: `url(${storeData?.profileImageURL})`}}
						/>
						<a href={`tel:${storeData.phone}`}>
							<Fab
								color="primary"
								aria-label="phone_enabled"
								className={classes.telephoneButton}
							>
								<PhoneEnabledIcon/>
							</Fab>
						</a>
					</div>
					<div>
						<div id="store-profile">
							<h4 className={classes.title}>{storeData.name?.de_DE}</h4>
							<h6 className={classes.subtitle}>{storeData.shopOwnerName}</h6>
							<p className={classes.subtitle}>{getAddress()}</p>

							<div className={classes.icons}>
								{storeData?.homepage && (
									<a href={storeData.homepage} target="_blank">
										<FontAwesomeIcon icon={faGlobe} width="32" />
									</a>
								)}
								{storeData?.email && (
									<a href={`mailto:${storeData.email}`} target="_blank">
										<FontAwesomeIcon icon={faEnvelope} width="32" />
									</a>
								)}
								{storeData?.whatsapp && (
									<a href={storeData.whatsapp} target="_blank">
										<FontAwesomeIcon icon={faWhatsapp} width="32" />
									</a>
								)}
								{storeData?.instagram && (
									<a href={storeData.instagram} target="_blank">
										<FontAwesomeIcon icon={faInstagram} width="32" />
									</a>
								)}
								{storeData?.telegram && (
									<a href={storeData.telegram} target="_blank">
										<FontAwesomeIcon icon={faTelegramPlane} width="32" />
									</a>
								)}
								{storeData?.twitter && (
									<a href={storeData.twitter} target="_blank">
										<FontAwesomeIcon icon={faTwitter} width="32" />
									</a>
								)}
								{storeData?.facebook && (
									<a href={storeData.facebook} target="_blank">
										<FontAwesomeIcon icon={faFacebook} width="32" />
									</a>
								)}
							</div>

							<p className={classes.description}>
								{shorten ? getShortenedText() : storeData.description.de_DE}
								{isShortened() &&
								(shorten ? (
									<>
										<span>… </span>
										<Link
											href=""
											className={classes.readmore}
											onClick={e => {
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
											onClick={e => {
												setShorten(true);
												e.preventDefault();
											}}
										>
											weniger
										</Link>
									</>
								))}
							</p>
						</div>

						<div className={classes.goods}>
							{productsData.map((good, index) => (
								<div className={classes.goodsGood} key={index}>
									<div className={classes.goodsGoodImageWrapper}>
										<div
											className={classes.goodsGoodImage}
											style={{
												backgroundImage: `url(${good.masterVariant?.images[0]?.url})`
											}}
										/>
									</div>
									<div>
										<h3 className={classes.goodsGoodName}>{good.name?.de_DE}</h3>
										<p className={classes.goodsGoodDescription}>
											{good.description?.de_DE}
										</p>
										<p className={classes.goodsGoodPrice}>{new Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR'
										}).format(good.price.value)}</p>
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