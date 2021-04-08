/**
 * BaseButton styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled, { keyframes }  from 'styled-components';

interface ButtonProps {
	buttonType: "primary" | "secondary";
  mt?: number;
  mb?: number;
}

export const BaseContainer = styled.div<ButtonProps>`
  position: relative;
  overflow: hidden;

  color: #fff;
  text-decoration: none;
  ${(p) => p.mt && "margin-top: " + p.mt + "em;"}
  ${(p) => p.mb && "margin-bottom: " + p.mb + "em;"}

	font-weight: 600;
  font-family: "Nunito", apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  font-size: 1em;
  background: ${(p) =>
    p.buttonType === "primary"
      ? "linear-gradient(91.51deg, #FB5B69 9.99%, #FF8D3C 94.44%)"
      : "#6eb9f7"};
      background: linear-gradient(269.85deg, #FFA4A4 3.6%, #FFC7AD 96.37%);
border: 4px solid #FFE3E3;
border-radius: 14px;
  text-align: center;
  cursor: pointer;
  display: inline-flex;

  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  p {
    color: #fff;
  }
  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
  }

`;

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

export const RippleWrapper = styled.div<RippleProps>`
	background: #fff;
	transform: translate(-50%, -50%);
	pointer-events: none;
	border-radius: 50%;
	animation: animate 0.4s ease-in;

	position: absolute;
	overflow: hidden;
	left: ${p => p.x + 'px'};
	top: ${p => p.y + 'px'};

	@keyframes animate {
		0% {
			width: 0;
			height: 0;
			opacity: 0.3;
		}
		100% {
      width: ${p => p.size + 'px'};
      height: ${p => p.size + 'px'};
			opacity: 0;
		}
	}
`

export const RippleContainer = styled.div`
 position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

`
