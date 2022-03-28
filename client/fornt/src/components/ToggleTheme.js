import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import {connect} from 'react-redux'
import {setTheme} from '../actions/authAction'


function ThemeToggle(props) {
	const handleChange = (event) => {
		props.setTheme(event.target.value);
	};
  
	return ( <Box sx={{ maxWidth: 220 }}>
		<FormControl fullWidth>
		  <InputLabel id="demo-simple-select-label">Theme</InputLabel>
		  <Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={props.auth.user.theme}
			label="Theme"
			onChange={handleChange}
		  >
			<MenuItem value={1}>Light</MenuItem>
			<MenuItem value={2}>Dark</MenuItem>
			<MenuItem value={3}>Blue</MenuItem>
			<MenuItem value={4}>Red</MenuItem>
		  </Select>
		</FormControl>
	  </Box>
	);
}

const mapStateToProps=(state)=>({
	auth:state.authReducer
})

const mapDispatchToProps=(dispatch)=>({
  setTheme:(theme)=>dispatch(setTheme(theme))
})
export default connect(mapStateToProps,mapDispatchToProps)(ThemeToggle);