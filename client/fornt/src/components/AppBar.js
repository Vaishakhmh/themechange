import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		alignItems: 'flex-start',
		paddingBottom: theme.spacing(2),
		backgroundColor:theme.palette.background,
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	toolbar: {
		minHeight: 128,
		alignItems: 'flex-start',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		alignSelf: 'flex-end'
	}
}));

export default function ProminentAppBar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Typography className={classes.title} variant='h5' noWrap>
						Sapience
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
