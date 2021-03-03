/* eslint-disable max-len */
/**
 * @interface Theme
 */

/**
 * Color palette.
 *
 * @memberof Theme
 * @alias colors
 */
const colors = {
  // Primary
  blue100: '#335D8F', //#335D8F
  blue80: '#3E6FA9',
  blue60: '#6690C1',
  blue40: '#DFECF8',

  sundown100: "#FFA4A4",
  sundown80: "#FFE3E3",

  // accent
  icon: "#335D8F",
  exode: "linear-gradient(90deg, #FB5B69 0.72%, #FF8D3C 100%)",
  sunrise: "linear-gradient(269.85deg, #FFA4A4 3.6%, #FFC7AD 96.37%)",

  dark100: "#000000",
  dark80: "#1D1B1B",

  // grey
  grey100: '#8FA5B7',
  grey80: '#D1DAE1',
  grey60: '#E5EEF5',
  white: '#fff',

  // global
  border: '##EEEEEE',

  // Elements
  // bg: '#F8FAFF',
  bg: '#FAFCFF',
  // bg: '#FAFCFF',
  bg_light: '#fff',

  text_primary: "#3E6FA9"
}

/**
 * Sizes can be used with paddings, margins etc.
 *
 * This is the example of using responsive margin with Box component
 *
 * ```javascript
 * <Box p=['default', 'xl']>some content</Box>
 * ```
 *
 * This component will have 8px padding for lowest breakpoint and 24px above
 * this breakpoint.
 *
 * @memberof Theme
 * @alias space

 * @property {string} xs=2px        2px - <span class="space-box" style="width: 2px;" />
 * @property {string} sm=4px        4px - <span class="space-box" style="width: 4px;" />
 * @property {string} default=8px   8px - <span class="space-box" style="width: 8px;" /> (alias md)
 * @property {string} lg=16px       16px - <span class="space-box" style="width: 16px;" />
 * @property {string} xl=24px       24px - <span class="space-box" style="width: 24px;" />
 * @property {string} xxl=32px      32px - <span class="space-box" style="width: 32px;" />
 * @property {string} x3=48px       48px - <span class="space-box" style="width: 48px;" />
 * @property {string} x4=64px       64px - <span class="space-box" style="width: 64px;" />
 * @property {string} x5=80px       80px - <span class="space-box" style="width: 80px;" />
 * @property {string} x6=128px      128px - <span class="space-box" style="width: 128px;" />
 */
const space = {
  xs: '2px',
  sm: '4px',
  default: '8px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  x3: '48px',
  x4: '64px',
  x5: '80px',
  x6: '128px',
}

/**
 * @memberof Theme
 * @alias sizes
 */
const sizes = {
}

/**
 * @memberof Theme
 * @alias fontSizes
 */
const fontSizes = {
  xs: '12px',
  sm: '14px',
  default: '16px',
  md: '16px',
  lg: '16px',
  xl: '18px',
  h6: "16px",
  h5: '20px',
  h4: '24px',
  h3: '28px',
  h2: '32px',
  h1: '40px',
}

/**
 * @memberof Theme
 * @alias fontWeights
 */
const fontWeights = {
  lighter: 200,
  light: 400,
  normal: 500,
  bold: 600,
  bolder: 700,
}

/**
 * @memberof Theme
 * @alias lineHeights
 */
const lineHeights = {
  xs: '10px',
  sm: '12px',
  default: '16px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '40px',
}

/**
 * This dimension can be used with `testShadow` and `boxShadow` props provided
 * by {@link ShadowProps}
 *
 * ```javascript
 * <Box variant="grey" boxShadow="card">Some content...</Box>
 * ```
 *
 * @alias shadows
 * @memberof Theme
 */
const shadows = {
}

/**
 * Responsive breakpoints
 *
 * How to use them - simply pass an array to given prop:
 *
 * ```javascript
 * // Showing box on mobile devices
 * <Box display={["block", "none"]}>...</Box>
 *
 * // responsive width
 * <Box width={[1, 1/2, 1/3, 1/4]}>...</Box>
 * ```
 *
 * @memberof Theme
 * @alias breakpoints
 * @property {string} 0=577px
 * @property {string} 1=769px
 * @property {string} 2=1024px
 * @property {string} 3=1324px
 */
const breakpoints = [
  '577px',
  '769px',
  '1024px',
  '1324px', // 1024 + sidebarWidth
]

const font = '\'Nunito\', apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif' as string

/**
 * Border styles
 *
 * @memberof Theme
 * @alias borders
 */
const borders = {
  default: '1px solid #EEEEEE'
}

/**
 * @memberof Theme
 * @alias borderWidths
 * @property {string} default - default border width
 */
const borderWidths = {
  default: '0px',
}

export type VariantType = 'primary'
  | 'secondary'

export const VariantValues: Array<VariantType> = ['primary', 'secondary']

export {
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
}

/**
 * The color utility parses a component's color and bg props and converts them into CSS
 * declarations. By default the raw value of the prop is returned. But most often you
 * would use one of the color from the [color palette]{@link colors}.
 *
 * @typedef {object} ColorProps
 * @alias ColorProps
 * @memberof Theme
 * @property {string} [color]                 Text color. It could be either a #hash or
 *                                            {@link colors} from css theme name like
 *                                            `grey80`
 * @property {string} [backgroundColor, bg]   Background color. Similar as above could be a
 *                                            #hash or one of {@link colors}.
 */

/**
 * The space utility converts shorthand margin and padding props to margin and padding
 * CSS declarations.
 *
 * You can use as a value raw dimensions in "px" or one of the value from the
 * [space scale]{@link space}.
 *
 * @typedef {object} SpaceProps
 * @alias SpaceProps
 * @memberof Theme
 * @property {string} [margin, m]             margin
 * @property {string} [marginTop, mt]         margin-top
 * @property {string} [marginRight, mr]       margin-right
 * @property {string} [marginBottom, mb]      margin-bottom
 * @property {string} [marginLeft, ml]        margin-left
 * @property {string} [marginX, mx]           margin-left and margin-right
 * @property {string} [marginY, my]           margin-top and margin-bottom
 * @property {string} [padding, p]            padding
 * @property {string} [paddingTop, pt]        padding-top
 * @property {string} [paddingRight, pr]      padding-right
 * @property {string} [paddingBottom, pb]     padding-bottom
 * @property {string} [paddingLeft, pl]       padding-left
 * @property {string} [paddingX, px]          padding-left and padding-right
 * @property {string} [paddingY, py]          padding-top and padding-bottom
 *
 * Set of props related to {@link space}. You can put there either string with 'px' or
 * one of `space` properties like `sm`, `default`, `xl` etc.
 */

/**
 * Typography props include _fontFamily_, _fontSize_, _fontWeight_, _lineHeight_, _letterSpacing_,
 * _textAlign_, and _fontStyle_.
 *
 * @typedef {object} TypographyProps
 * @alias TypographyProps
 * @memberof Theme
 * @property {string} [fontSize]    font-size. Could be either actual css value or key taken from
 *                                  {@link fontSizes}
 * @property {string} [fontWeight]  font-weight. Could be either actual css value or key taken from
 *                                  {@link fontWeights}
 * @property {string} [lineHeight]  line-height. Could be either actual css value or key taken from
 *                                  {@link lineHeights}
 * @property {string} [textAlign]   text-align
 * @property {string} [fontFamily]  font-family
 * @property {string} [fontStyle]   font-style
 * @property {string} [letterSpacing]  letter-spacing
 */

/**
 * The layout utility includes style props for width, height, display, minWidth,
 * minHeight, maxWidth, maxHeight, size, verticalAlign, overflow, overflowX, and overflowY.
 *
 * The width prop is transformed based on the following:
 *
 * - Numbers from 0-1 are converted to percentage widths.
 * - Numbers greater than 1 are converted to pixel values.
 * - String values are passed as raw CSS values.
 * - And arrays are converted to responsive width styles.
 * - the width prop will attempt to pick up values from the {@link sizes}
 *
 * @example
 * // width `50%`
 * <Box width={1/2} />
 *
 * // width `256px`
 * <Box width={256} />
 *
 * // width `'2em'`
 * <Box width='2em' />
 *
 * // width `100%` on all viewport and `50%` from the smallest breakpoint and up
 * <Box width={[ 1, 1/2 ]} />
 *
 * // width from `sizes`
 * <Box height='navbarHeight' />
 *
 * @typedef {object} LayoutProps
 * @alias LayoutProps
 * @memberof Theme
 * @property {string} [width]         width
 * @property {string} [height]        height
 * @property {string} [display]       display
 * @property {string} [minWidth]      min-width
 * @property {string} [minHeight]     min-height
 * @property {string} [maxWidth]      max-width
 * @property {string} [maxHeight]     max-height
 * @property {string} [size]          size
 * @property {string} [verticalAlign] vertical-align
 * @property {string} [overflow]      overflow
 * @property {string} [overflowX]     overflow-x
 * @property {string} [overflowY]     overflow-y
 */

/**
 * The flexbox utility includes style props for alignItems, alignContent, justifyItems,
 * justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis,
 * justifySelf, alignSelf, and order.
 *
 * The width prop is transformed based on the following:
 *
 * - Numbers from 0-1 are converted to percentage widths.
 * - Numbers greater than 1 are converted to pixel values.
 * - String values are passed as raw CSS values.
 * - And arrays are converted to responsive width styles.
 * - the width prop will attempt to pick up values from the {@link sizes}
 *
 * @example
 * // alignItems
 * <Box alignItems='center' />
 *
 * // alignContent
 * <Box alignContent='center' />
 *
 * // justifyContent
 * <Box justifyContent='center' />
 *
 * // flexWrap
 * <Box flexWrap='wrap' />
 *
 * // flexBasis
 * <Box flexBasis='auto' />
 *
 * // flexDirection
 * <Box flexDirection='column' />
 *
 * // flex
 * <Box flex />
 *
 * // justifySelf
 * <Box justifySelf='center' />
 *
 * // alignSelf
 * <Box alignSelf='center' />
 *
 * // order
 * <Box order='2' />
 *
 * @typedef {object} FlexboxProps
 * @alias FlexboxProps
 * @memberof Theme
 * @property {string} [alignItems]         align-items
 * @property {string} [alignContent]       align-content
 * @property {string} [justifyItems]       justify-items
 * @property {string} [justifyContent]     justify-content
 * @property {string} [flexWrap]           flex-wrap
 * @property {string} [flexDirection]      flex-direction
 * @property {boolean} [flex]               flex
 * @property {number|string} [flexGrow]           flex-grow
 * @property {number} [flexShrink]         flex-shrink
 * @property {string} [flexBasis]          flex-basis
 * @property {string} [justifySelf]        justify-self
 * @property {string} [alignSelf]          align-self
 * @property {number|string} [order]              order
 */

/**
 * Reused Variant Enum: `primary` | `danger` | `success` | `info` | `secondary` | `default`
 *
 * @typedef {Enum} VariantType
 * @alias VariantType
 * @memberof Theme
 */

/**
 * The border utility includes all style props related to border
 *
 * @typedef {object} BorderProps
 * @alias BorderProps
 * @memberof Theme
 * @property {string | number} [borderWidth]
 * @property {string} [borderStyle]
 * @property {string} [borderColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderRadius]
 * @property {string | number} [borderTop]
 * @property {string | number} [borderTopWidth]
 * @property {string} [borderTopStyle]
 * @property {string} [borderTopColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderTopLeftRadius]
 * @property {string | number} [borderTopRightRadius]
 * @property {string | number} [borderRight]
 * @property {string | number} [borderRightWidth]
 * @property {string} [borderRightStyle]
 * @property {string} [borderRightColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderBottom]
 * @property {string | number} [borderBottomWidth]
 * @property {string} [borderBottomStyle]
 * @property {string} [borderBottomColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderBottomLeftRadius]
 * @property {string | number} [borderBottomRightRadius]
 * @property {string | number} [borderLeft]
 * @property {string | number} [borderLeftWidth]
 * @property {string} [borderLeftStyle]
 * @property {string} [borderLeftColor] It could be either a #hash or {@link colors}
 * @property {string | number} [borderX]
 * @property {string | number} [borderY]
 */

/**
 * The position utility includes style props for position, zIndex, top, right, bottom, and left.
 *
 * @typedef {object} PositionProps
 * @alias PositionProps
 * @memberof Theme
 * property {string | number} [position]
 * property {string | number} [zIndex]
 * property {string | number} [top]
 * property {string | number} [right]
 * property {string | number} [bottom]
 * property {string | number} [left]
 */

/**
 * The shadow utility includes style props for textShadow and boxShadow.
 *
 * @typedef {object} ShadowProps
 * @alias ShadowProps
 * @memberof Theme
 * property {string} [boxShadow]
 * property {string} [textShadow]
 */
