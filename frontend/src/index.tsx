import React from 'react';
import ReactDOM from 'react-dom';
import ContentPage from "./ContentPage"
import {GlobalStyle} from "src/assets/styles"
import { ThemeProvider, default as styled } from 'styled-components'

import * as mainTheme from "src/assets/styles/themes/main_theme"
import * as darkTheme from "src/assets/styles/themes/dark_theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <ContentPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
