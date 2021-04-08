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
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9.5" fill="#FFA4A4" stroke="#FFE3E3" strokeWidth="2" />
          <path
            d="M14.8536 5.19943C14.6583 4.93352 14.3417 4.93352 14.1464 5.19943L8.15614 13.3564L5.85356 10.2211C5.65831 9.95515 5.34175 9.95518 5.14645 10.2211C4.95118 10.4869 4.95118 10.918 5.14645 11.1839L7.80258 14.8007C7.99778 15.0665 8.31458 15.0664 8.50969 14.8007L14.8536 6.16229C15.0488 5.89641 15.0488 5.46533 14.8536 5.19943Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
}
