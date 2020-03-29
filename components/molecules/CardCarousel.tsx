import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '../atoms/Link'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '20px',
	},
	card: {
		marginTop: '10px',
	},
	media: {
		height: 200
	}
}));

export default function CardCarousel(props) {
	const { storeData } = props;
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				{storeData.map((store,index) => (
					<Link key={index} href={`/stores/${store.id}`} style={{ textDecoration: 'none' }}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={store.profileImageURL}
									title={`${store.name['de_DE']}-profile`}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{store.name['de_DE']}
									</Typography>

								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
}