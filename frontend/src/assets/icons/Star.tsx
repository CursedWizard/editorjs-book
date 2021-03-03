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
export default class Star extends React.Component<Props> {
  static defaultProps: Props = {
    width: 48,
    height: 48
  }
  render() {
    return (
      <div style={{ ...this.props.style }}>
        <svg
          width={this.props.width}
          height={this.props.height}
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
            fill="#6DA6DD"
          />
          <path
            d="M21.9796 14.9687L22.096 15.2044L22.3561 15.2422L28.1135 16.0788C28.2834 16.1035 28.4247 16.2225 28.4779 16.386C28.531 16.5495 28.4867 16.7289 28.3637 16.8488C28.3637 16.8489 28.3637 16.8489 28.3636 16.8489L24.1976 20.9098L24.0094 21.0932L24.0538 21.3523L25.0373 27.0865C25.0373 27.0865 25.0373 27.0865 25.0373 27.0865C25.0664 27.2558 24.9967 27.427 24.8577 27.528C24.7196 27.6283 24.5354 27.6428 24.3823 27.5624C24.3823 27.5624 24.3822 27.5624 24.3822 27.5623L19.2327 24.8551L19 24.7328L18.7674 24.8551L13.6178 27.5624C13.4657 27.6423 13.2814 27.629 13.1423 27.528C13.0034 27.427 12.9337 27.2558 12.9628 27.0865L13.9463 21.3523L13.9907 21.0932L13.8025 20.9098L9.63636 16.8489C9.63636 16.8489 9.63635 16.8488 9.63635 16.8488C9.51332 16.7289 9.46903 16.5495 9.52211 16.3861C9.57518 16.2227 9.71648 16.1036 9.88652 16.0789L15.644 15.2423L15.9041 15.2045L16.0204 14.9688L18.5952 9.75167L18.5952 9.75164C18.6713 9.59754 18.8282 9.5 19 9.5C19.1718 9.5 19.3288 9.59755 19.4048 9.75161L21.9796 14.9687Z"
            fill="#FEFEFE"
            stroke="white"
          />
        </svg>
      </div>
    );
  }
}
