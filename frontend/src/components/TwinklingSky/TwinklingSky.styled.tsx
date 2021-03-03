/**
 * TwinklingSky styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled from "styled-components";

export const SkyWrapper = styled.div`
  background: linear-gradient(to top, #3E6FA9 0%, #8dd5e4 100%);
  /* background: linear-gradient(to top, #3E6FA9 0%, #FFC7AD 100%); */

  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

export const Sky = styled.svg`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const ShootingStar = styled.div`
  margin: 0;
  padding: 0;
  width: 100vh;
  height: 100vw;
  position: fixed;
  overflow: hidden;
  transform: translatex(calc(90vw - 50%)) translatey(calc(30vh - 60%))
    rotate(120deg);
`;

export const Wish = styled.div`
  height: 2.5px;
  top: 100px;
  width: 100px;
  margin: 0;
  opacity: 0;
  padding: 0;
  background-color: white;
  position: absolute;
  background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 8px white);
  overflow: hidden;
`;

export const Text = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 600;
  color: white;
  margin-left: 0.3em;
`

export const SolarSystem = styled.div`
position: relative;
/* width: 250px; */
/*   height: 250px; */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Orbit = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fafbfC;
border-radius: 50%;
`

export const EarthOrbit = styled(Orbit)`
  width: 165px;
  height: 165px;
  animation: spin 7.4s linear 0s infinite; 

`
export const VenusOrbit = styled(Orbit)`
  width: 120px;
  height: 120px;
  animation: spin 3.4s linear 0s infinite;
`
export const StaticOrbit = styled.div`
  width: 120px;
  height: 120px;
 
`

export const Planet = styled.div`
position: absolute;
top: -5px;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: white;
`

export const StyledLogo = styled.img`
position: absolute;

`
export const CircleBorder = styled.div`
width: 100px;
height: 100px;
padding: 3px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background: rgb(63,249,220);
background: linear-gradient(0deg, rgba(255,255,255,0.1) 33%, rgba(255,255,255,1) 100%);
animation: spin .8s linear 0s infinite;
`

export const CircleCore = styled.div`
position: absolute;
width: 94%;

height: 94%;
background: #ff9f4d;
  background: linear-gradient(to top, #3E6FA9 -300%, #8dd5e4 400%);
  /* background: linear-gradient(to top, #3E6FA9 -300%, #FFC7AD 400%); */

border-radius: 50%;
`
