import React, { FC, HTMLAttributes, RefCallback, RefObject } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
}

/**
 * @props
 * 
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
 * @export
 * @class BadgeIcon
 */
export default class WizardHat extends React.Component<Props> {
  static defaultProps: Props = {
    width: 48,
    height: 48
  }
  render() {
    return (
      <div style={{ ...this.props.style }}>


<svg width={this.props.width} height={this.props.height} viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.6327 42.2518C60.6327 47.365 63.5815 48.7458 52.7691 58.487C47.7253 60.5143 48.8373 62.1979 29.67 59.8786C10.5026 58.9509 -3.25856 53.8484 0.673206 42.2518C0.673206 33.5415 14.0956 26.4804 30.653 26.4804C55.7179 23.6972 60.6327 33.5415 60.6327 42.2518Z" fill="#F8FAFF"/>
<path d="M55 41.1431C55 44.9297 44.2544 48 31 48C17.7456 48 7 44.9297 7 41.1431C7 39.2747 9.61656 37.5797 13.8578 36.3441L16.4575 34.2197L16.4913 31.9978L27.5716 13.7147L24.1431 6.85687L30.1497 0H31V6.85687L37.8569 13.7147L46.0478 31.7353L45.7066 33.8719L48.1422 36.3441C52.3834 37.5797 55 39.2747 55 41.1431Z" fill="#295180"/>
<path d="M55 41.1432C55 44.9297 44.2544 48 31 48V6.85693L37.8569 13.7147L46.0478 31.7354L45.7066 33.8719L48.1422 36.3441C52.3834 37.5797 55 39.2747 55 41.1432Z" fill="#3E6FA9"/>
<path d="M48.1431 36.345C48.1431 39.0497 40.4678 41.1432 31 41.1432C21.5322 41.1432 13.8569 39.0497 13.8569 36.345L16.4912 31.9979C19.5269 33.3722 24.8903 34.2853 31 34.2853C37.4894 34.2853 43.1369 33.256 46.0478 31.7354L48.1431 36.345Z" fill="#E18C8C"/>
<path d="M48.1431 36.345C48.1431 39.0497 40.4678 41.1432 31 41.1432V34.2853C37.4894 34.2853 43.1369 33.256 46.0478 31.7354L48.1431 36.345Z" fill="#FFA4A4"/>
<path d="M26.2937 32.9099H35.7062V42.3224H26.2937V32.9099Z" fill="#DDAB5F"/>
<path d="M31 32.9099H35.7063V42.3224H31V32.9099Z" fill="#FFC469"/>
</svg>
      </div>
    );
  }
}
