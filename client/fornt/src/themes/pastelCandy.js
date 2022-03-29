import { createTheme } from '@material-ui/core/styles';

// 'pastel candy' theme
const pastelCandy = createTheme({
	palette: {
		primary: {
			main: '#bdb2ff',
			contrastText: '#caffbf'
		},
		background: {
			default: '#caffbf'
		},
		text: {
			primary: '#25439a'
		}
	}
});

export default pastelCandy;
