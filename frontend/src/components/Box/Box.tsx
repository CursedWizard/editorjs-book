import styled from 'styled-components'
import {
  space, SpaceProps, color, layout, ColorProps,
  LayoutProps, flexbox, FlexboxProps, border, BorderProps,
  position, PositionProps, variant, FontSizeProps, 
  TypographyProps, typography, shadow, ShadowProps
} from 'styled-system'

const variants = variant({
  variants: {
    grey: {
      flexGrow: 1,
      bg: 'bg',
      py: 'xl',
      px: ['0', 'xl'],
    },
    white: {
      px: ['default', 'xxl'],
      py: 'xxl',
      bg: 'white',
    },
    card: {
      p: 'xxl',
      bg: 'white',
      boxShadow: 'card'
    },
  },
})

type NewColorProps = Omit<ColorProps, 'color'> & {
  color?: string
}

type NewTypographyProps = Omit<TypographyProps, 'fontSize'> & {
  fontSize?: string
}

export type BoxProps = SpaceProps & LayoutProps & NewColorProps & NewTypographyProps &
  FlexboxProps & BorderProps & PositionProps & ShadowProps & {

}

const Box = styled.section<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${({ flex }): string => (flex && typeof flex === 'boolean' ? 'display: flex;' : '')}
  font-family: ${({ theme }): string => theme.font};
  line-height: ${({ theme }): string => theme.lineHeights.default};
  /* font-size: ${({ theme }): string => theme.fontSizes.default}; */
  font-weight: normal;


  ${typography}
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${border};
  ${shadow};
  ${position};
  ${variants};
`


export { Box }
export default Box
