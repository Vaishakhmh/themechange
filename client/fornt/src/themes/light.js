import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: 'rgb(220, 0, 78)',
        },
        background: {
          default: '#fff',
          paper: '#fff',
        },
      },

})

export default theme