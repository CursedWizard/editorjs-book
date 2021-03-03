
import * as React from "react";
import { SkyWrapper, Sky, Wish, ShootingStar, Text as CenterText } from './TwinklingSky.styled';
import * as SkyStyled from "./TwinklingSky.styled"
import anime from "animejs"


interface State {
  num: number;
  vw: number;
  vh: number;
}

class TwinklingSky extends React.Component<Record<string, never>, State> {
  state: State = {
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
  };

  nightAnime: any = null;
  starsAnime: any = null;
  starryNight = () => {
    this.nightAnime = anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0",
        },
        {
          duration: 700,
          value: "1",
        },
      ],
      easing: "linear",
      loop: true,
      delay: (el: any, i: any) => 50 * i,
    });
  };
  shootingStars = () => {
    this.starsAnime = anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el: any, i: any) => 500 * i,
      opacity: [
        {
          duration: 700,
          value: "1",
        },
      ],
      width: [
        {
          value: "150px",
        },
        {
          value: "0px",
        },
      ],
      translateX: 350,
    });
  };
  randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };
  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };
  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }

  componentWillUnmount() {
    if (this.nightAnime) this.nightAnime.remove();
    if (this.starsAnime) this.starsAnime.remove();
  }

  render() {
    const { num } = this.state;
    return (
      <SkyWrapper>
        <Sky id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={this.getRandomX()}
              cy={this.getRandomY()}
              r={this.randomRadius()}
              stroke="none"
              strokeWidth="0"
              fill="white"
              key={y}
              className="star"
            />
          ))}
        </Sky>
        <ShootingStar id="shootingstars">
          {[...Array(60)].map((x, y) => (
            <Wish
              key={y}
              className="wish"
              style={{
                left: `${this.getRandomY()}px`,
                top: `${this.getRandomX()}px`,
              }}
            />
          ))}
        </ShootingStar>
        <CenterText>
          <SkyStyled.SolarSystem>
            <SkyStyled.CircleBorder></SkyStyled.CircleBorder>
            <SkyStyled.CircleCore />
          </SkyStyled.SolarSystem>
        </CenterText>
      </SkyWrapper>
    );
  }
}

export default TwinklingSky;

