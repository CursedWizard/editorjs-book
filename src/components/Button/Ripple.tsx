/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from "react";
import { RippleWrapper, RippleContainer } from './Button.styled';

interface Point {
	x: number;
	y: number;
  size: number;
}

interface Props {
	/**
	* description
	*/
	count: number;

	/*
	* description
	*/
	points: {
		[id: string]: Point
	};
}


interface State {
	/**
	* description
	*/
	ripples?: Point[];

	/*
	* description
	*/
	val_2?: string;
}

class Ripple extends React.Component<Props, State> {

  renderRipples(): JSX.Element[] | null {
		const pointsArray = Object.keys(this.props.points);
    if (pointsArray && pointsArray.length > 0) {
      return pointsArray.map((key: string, index: number) => {
        return (
          <RippleWrapper
            key={index}
            x={this.props.points[key].x}
            y={this.props.points[key].y}
            size={Math.max(this.props.points[key].size, 100)}
          />
        );
      });
    } else {
      return null;
    }
	}


  render() {
		return (
				this.renderRipples()
		);
	}
}

export default Ripple;

