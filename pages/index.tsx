import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import StoresService from '../services/stores';
import CardCarousel from '../components/molecules/CardCarousel';
import useStyles from './index/styles';
import mockData from './index/mock-data';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
	const classes = useStyles();
	const [kiez, setKiez] = useState('');
	const [filteredLocations, setFilteredLocations] = useState([]);

	const [storeData, setStoreData] = useState([]);

	const fetchStoreData = async location => {
		const StoreServiceInstance = new StoresService();
		setStoreData(await StoreServiceInstance.getStores(location));
	};

	return (
		<Container maxWidth={'md'} className={classes.wrapper}>
			<div className={classes.searchPanel}>
				<h5 className={classes.intro}>
					Sei ein Held zu Zeiten von Corona. Rette den Laden bei Dir um die
					Ecke. Hier kannst Du helfen.
				</h5>
				<form
					className={classes.form}
					onSubmit={e => {
						e.preventDefault();
						fetchStoreData(kiez);
					}}
				>
					<div className={classes.searchWrapper}>
						<label htmlFor='home__search' className={classes.searchLabel}>
							Ort
						</label>
						<FontAwesomeIcon
							className={classes.searchMarker}
							icon={faMapMarkerAlt}
							width='16'
						/>
						<input
							id='home__search'
							className={classes.search}
							type='text'
							autoComplete='off'
							value={kiez}
							placeholder='Wähle einen Ort…'
							onChange={e => {
								setKiez(e.target.value);
								setFilteredLocations(
									e.target.value
										? mockData.kiezList.filter(location =>
											location
												.toLowerCase()
												.match(e.target.value.toLowerCase())
										)
										: []
								);
							}}
						/>
						{kiez && filteredLocations && filteredLocations.length > 0 && (
							<ul className={classes.selectionList}>
								{filteredLocations.map(option => (
									<li
										key={option}
										className={classes.selectionListItem}
										onClick={e => {
											e.preventDefault();
											setKiez(option);
											setFilteredLocations([]);
											fetchStoreData(option);
										}}
									>
										{option}
									</li>
								))}
							</ul>
						)}
					</div>
					<button
						className={classes.btnPrimary}
						type='submit'
						onClick={e => {
							//e.preventDefault();
							fetchStoreData(kiez);
						}}
					>
						Suchen
					</button>
				</form>
			</div>
			{storeData.length > 0 ? (
				<>
					<CardCarousel storeData={storeData} />
				</>
			) : (
				kiez.length > 0 && `Keine Ergebnisse für Suche nach '${kiez}'`
			)}
		</Container>
	);
}