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
    height: 48,
  };
  render() {
    return (
      <div style={{ ...this.props.style }}>

<svg width={this.props.width} height={this.props.height} viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.6327 44.2518C60.6327 49.365 63.5815 50.7458 52.7691 60.487C47.7253 62.5143 48.8373 64.1979 29.67 61.8786C10.5026 60.9509 -3.25856 55.8484 0.673206 44.2518C0.673206 35.5415 14.0956 28.4804 30.653 28.4804C55.7179 25.6972 60.6327 35.5415 60.6327 44.2518Z" fill="#F8FAFF"/>
<path d="M35.8559 14.7102V11.0896H25.5716V14.7102C20.5447 16.7455 17 21.673 17 27.4283V47.9999H44.4275V27.4283C44.4275 21.673 40.8828 16.7455 35.8559 14.7102Z" fill="#E5EEF5"/>
<path d="M44.4275 27.4283V47.9999H30.7137V11.0896H35.8559V14.7102C40.8828 16.7455 44.4275 21.673 44.4275 27.4283V27.4283Z" fill="#D1DAE1"/>
<path d="M41.615 27.4285V45.1875H19.8125V27.4285H23.8559C23.8559 29.3222 25.3916 30.8578 27.2853 30.8578C29.1791 30.8578 30.7137 29.3222 30.7137 27.4285H41.615Z" fill="#FFA4A4"/>
<path d="M30.7137 27.4285H41.615V45.1875H30.7137V27.4285Z" fill="#E18C8C"/>
<path d="M29.3075 37.021H32.12V39.8335H29.3075V37.021Z" fill="#F2F2F2"/>
<path d="M30.7136 37.021H32.1199V39.8335H30.7136V37.021Z" fill="#E7E7F2"/>
<path d="M33.0975 32.2769H35.91V35.0894H33.0975V32.2769Z" fill="#E7E7F2"/>
<path d="M35.7627 39.4822H38.5752V42.2947H35.7627V39.4822Z" fill="#E7E7F2"/>
<path d="M35.8568 0L34.1421 11.0887H27.2852L25.5706 0H35.8568Z" fill="#3E6FA9"/>
<path d="M35.8569 0L34.1422 11.0887H30.7137V0H35.8569Z" fill="#295180"/>
<path d="M22.2734 9.68262H39.1541V12.4951H22.2734V9.68262Z" fill="#E7E7F2"/>
<path d="M30.7137 9.68262H39.1541V12.4951H30.7137V9.68262Z" fill="#CECEE6"/>
</svg>
      </div>
    );
  }
}
