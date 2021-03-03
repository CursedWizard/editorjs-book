
import * as React from "react";
import {StyledComponent} from "styled-components";
import { BaseContainer } from './Button.styled';
import RippleWrapper from "./Ripple"

import styled from 'styled-components'
import {
  space, SpaceProps, color, layout, ColorProps,
  LayoutProps, flexbox, FlexboxProps, border, BorderProps,
  position, PositionProps, variant, FontSizeProps, 
  TypographyProps, typography, shadow, ShadowProps
} from 'styled-system'


export type ButtonProps = SpaceProps & LayoutProps & ColorProps & TypographyProps &
  FlexboxProps & BorderProps & PositionProps & ShadowProps & {

  onClick?: (arg0: any | undefined) => void;
  style?: React.CSSProperties | undefined;
  variant?: "primary" | "secondary" | "neutral";
}

const variants = variant({
  variants: {
    primary: {
      background: "linear-gradient(269.85deg, #FFA4A4 3.6%, #FFC7AD 96.37%)",
      fontWeight: "700",
      borderRadius: "14px"
    },
    secondary: {
      background: "#FFA4A4",
      boxShadow: "2px 2px 4px rgba(255, 164, 164, 0.5)",
      border: "none",
      fontWeight: "700"
    },
    neutral: {
      background: "#FCFEFF",
      boxShadow: "2px 2px 4px rgba(175, 198, 255, 0.25)",
      border: "1px solid #B8CDE5",
      color: "blue80"
    },
  },
})

const ButtonWrapper = styled.div<ButtonProps>`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  color: white;
  font-family: ${({ theme }): string => theme.font};
  background: linear-gradient(269.85deg, #FFA4A4 3.6%, #FFC7AD 96.37%);
  border: 3px solid #FFE3E3;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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

interface Point {
	x: number;
	y: number;
  size: number;
}

interface State {
	/**
	* description
	*/
	points: {

		[id: string]: Point
	};

	/*
	* description
	*/
	count: number;
}

/**
 * @props
 *
	text: string;
  buttonType: "primary" | "secondary";
	styleWrapper?: StyledComponent<"div", any, Record<string, unknown>, never>;
  onClick?: (arg0: any | undefined) => void;
  color?: string;
  contentWrapper?: StyledComponent<"div", any, Record<string, unknown>, never>;
  mt?: number;
  mb?: number;
  style?: React.CSSProperties | undefined;
 * @class BaseButton
 */
class Button extends React.Component<ButtonProps, State> {
  static defaultProps: ButtonProps = {
  };

  _isMounted = false;
  state: State = {
    points: {},
    count: 0,
  };

  timer: any;
  getPoint = (e: any): void => {
    const pos = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - pos.left;
    const y = e.clientY - pos.top;
    const count = this.state.count + 1;

    this.setState({
      points: {
        ...this.state.points,
        [count]: { x: x, y: y, size: Math.max(pos.width, pos.height) },
      },
      count: count,
    });
  };

  cleanUp = (): void => {
    if (!this._isMounted)
      return;
    this.setState({
      points: {},
      count: 0,
    });
  };

  removePoints = (): void => {
    clearTimeout(this.timer);
    this.timer = setTimeout((cleanup = this.cleanUp) => {
      cleanup();
    }, 400);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  render() {
    const {variant, onClick, ...props} = this.props
    return (
      <ButtonWrapper
        variant={variant}
        onMouseDown={this.getPoint}
        onMouseUp={this.removePoints}
        onClick={onClick}
        {...props as ButtonProps | unknown}
      >
        {this.props.children}
        <RippleWrapper count={this.state.count} points={this.state.points} />
      </ButtonWrapper>
    );
  }
}

export default Button;

