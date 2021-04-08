
import React from 'react';
import ReactDOM from 'react-dom';
import ContentPage from "./ContentPage"
import {GlobalStyle} from "./assets/styles"
import { ThemeProvider, default as styled } from 'styled-components'

import * as mainTheme from "./assets/styles/themes/main_theme"
import * as darkTheme from "./assets/styles/themes/dark_theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <ContentPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

