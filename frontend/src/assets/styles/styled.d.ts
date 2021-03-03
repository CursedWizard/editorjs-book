// import original module declaration
import 'styled-components';
import {
  colors,
  lineHeights,
  fontWeights,
  fontSizes,
  sizes,
  space,
  font,
  shadows,
  borders,
  breakpoints,
  borderWidths,
} from "./themes/main_theme"

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    lineHeights: typeof lineHeights;
    colors: typeof colors;
    fontWeights: typeof fontWeights;
    fontSizes: typeof fontSizes;
    sizes: typeof sizes;
    space: typeof space;
    font: typeof font;
    shadows: typeof shadows;
    borders: typeof borders;
    breakpoints: typeof breakpoints;
    borderWidths: typeof borderWidths;

  }
}
