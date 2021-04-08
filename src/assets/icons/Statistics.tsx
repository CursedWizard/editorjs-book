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
    width: 24,
    height: 24,
  };
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <svg
          width={this.props.width}
          height={this.props.height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" width="4" height="14" rx="2" fill="white" />
          <rect x="10" y="3" width="4" height="11" rx="2" fill="white" />
          <rect y="5" width="4" height="9" rx="2" fill="white" />
        </svg>
      </div>
    );
  }
}
