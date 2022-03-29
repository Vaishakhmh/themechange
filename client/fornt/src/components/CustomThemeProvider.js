import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../themes';
import {connect} from 'react-redux';


const CustomThemeProvider = props => {
	const themeArray=['light','dark','blue','red'];
	const { children } = props;

	// Get current theme from store
	const currentTheme =themeArray[props.auth.user.theme?props.auth.user.theme-1:1];


	// Retrieve theme object by theme name
	const theme = getTheme(currentTheme);


	return (
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
	);
};

const mapStateToProps=(state)=>({
  auth:state.authReducer
})
export default connect(mapStateToProps,null)(CustomThemeProvider);
