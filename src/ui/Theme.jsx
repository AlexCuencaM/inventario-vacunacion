import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

const themePalette = createTheme({
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

export const Theme = ({children}) =>{
    return (
        <ThemeProvider theme={themePalette}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
} 