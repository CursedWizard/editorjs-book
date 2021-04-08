import React, { FC, HTMLAttributes, RefCallback, RefObject } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  fill?: string;
  viewBox?: string;
}

export default class BadgeIcon extends React.Component<Props> {

  static defaultProps: Props = {
    width: 28,
    height: 28
  }

  render() {
    return (
      <div style={{ ...this.props.style }}>
        <svg
          style={this.props.style}
          className={this.props.className}
          width="21"
          height="21"
          viewBox="-1 -1 23 23"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9.5" stroke="#FFE3E3" strokeWidth="2" />
        </svg>
      </div>
    );
  }
}
