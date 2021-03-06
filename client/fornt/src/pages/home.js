import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../components/AppBar';
import ToggleTheme from '../components/ToggleTheme';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		justifyContent: 'space-between'
	},
	main: {
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(2),
		padding: theme.spacing(0, 0),
		justifyContent: 'space-between'
	},
	footer: {
		padding: theme.spacing(2, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
	header: {
		paddingBottom: '2px'
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Container className={classes.main}>
				<AppBar />
				<Container>
					<Typography variant='h2' component='h1' gutterBottom>
						Select Theme
					</Typography>
					<Typography variant='h5' component='h2' gutterBottom>
						{'Select Themes below.'}
					</Typography>
				</Container>
			</Container>
			<Container className={classes.footer}>
				<ToggleTheme />
			</Container>
		</Container>
	);
}
