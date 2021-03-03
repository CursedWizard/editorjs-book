
import * as React from "react";
import { ProgressBarContainer } from './ProgressBar.styled';
import styled from "styled-components";
import {
  space, SpaceProps, color, layout, ColorProps,
  LayoutProps, flexbox, FlexboxProps, border, BorderProps,
  position, PositionProps, variant, FontSizeProps, 
  shadow, ShadowProps
} from 'styled-system'

export type ProgressBarProps = SpaceProps & LayoutProps  & PositionProps & {
	/**
	* @description complete percent
	* @memberof ProgressBarProps
	*/
	percentage: number;
  style?: React.CSSProperties;
}

export const ProgressVessel = styled.div<Omit<ProgressBarProps, "percentage">>`
  /* background-color: rgb(229, 229, 229); */
  background: rgba(158, 183, 206, 0.27);
  border-radius: 18px;
  box-shadow: none;
  height: 20px;
  position: relative;

  ${space};
  ${layout};
  ${position};
`;

export const Progress = styled.div<ProgressBarProps>`
  box-sizing: border-box;
  border-radius: 18px;
  height: 20px;
  position: relative;
  transition: all 0.4s ease-in-out;
  background: ${({ theme }) => theme.colors.sundown100};

  padding-top: 4px;

  & div {
    position: absolute;
    background-color: #ffcccc;
    height: 35%;
    border-radius: 4px;
    left: 9px;
    right: 9px;
  }

  ${layout};
  ${position};
  width: ${(p) => p.percentage}%;
`;

class ProgressBar extends React.Component<ProgressBarProps> {

	render() {
    const {percentage, ...props} = this.props
		return (
      <ProgressVessel 
        {...props as ProgressBarProps | unknown}
      >
        <Progress 
          percentage={percentage}
          {...props as ProgressBarProps | unknown}
        >
          <div />
        </Progress>
      </ProgressVessel>
    );
	}
}

export default ProgressBar;

