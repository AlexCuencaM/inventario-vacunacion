import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useStore } from '../store/store';

const themeDarkPalette = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[300],
    },
    secondary: {
      main: red[200],
    },
    
  },
});
const themeLightPalette = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: blue[700],
      },
      secondary: {
        main: red[700],
      },
    },
  });

export const Theme = ({children}) =>{
    const {ui} = useStore()
    return (
        <ThemeProvider theme={ui.night ? themeDarkPalette : themeLightPalette}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
} 