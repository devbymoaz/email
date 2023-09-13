import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#2DC799',
      second: '#e2e2e2',
      third: '#0000FF'

    },
  },
  typography: {
    fontSize: 15,
  },
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1235,
  //   },
  // },

});