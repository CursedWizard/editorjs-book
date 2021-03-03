
import * as React from "react";
import styled from "styled-components"


const Container = styled.svg`
  position: absolute;
  right: 2em;
  bottom: 1.5em;

  width: 3.5em;
  height: 3.5em;
  overflow: hidden;

`

interface Props {
	/**
	* description
	*/
	width: number;

	/*
	* description
	*/
	height: number;
}

class LevelCircular extends React.Component<Props> {
  static defaultProps: Props = {
    width: 61,
    height: 58
  }

	render() {
		return (
      <Container
        x="0px"
        y="0px"
        width="93.558px"
        height="93.558px"
        viewBox="0 0 93.558 93.558"
      >
        <path
          d="M72.766,74.275c-13.366-10.451-3.933-53.438-3.933-53.438s14.631,0,16.336,0s8.389-1.072,8.389-9.076
			c0-9.846-8.168-9.241-8.168-9.241s-44.774,0-60.147,0c-9.873,0-18.784,11.304-23.899,19.389c-2.723,4.318-1.183,5.528,3.493,3.493
			c16.392-7.178,21.012-4.593,21.012-4.593c1.155,5.528,1.54,30.473-2.667,40.318c-4.263,9.269-12.128,21.012-0.578,27.915
			c9.021,5.115,18.481-5.391,17.546-23.268c-0.44-9.461-1.183-44.938-1.183-44.938h15.072c-0.469,5.528-3.025,33.745-0.357,50.467
			c2.777,27.915,33.112,22.497,38.777,6.685c1.402-4.373,1.073-7.729,0.027-10.26c-1.926-4.702-5.144-4.949-4.785-2.75
			c0.221,1.402,0.083,2.777-0.138,4.016C86.902,72.817,79.092,78.811,72.766,74.275z"
          fill="#3F00C5"
          fillOpacity="0.21"
        />
      </Container>
    );
	}
}

export default LevelCircular;

