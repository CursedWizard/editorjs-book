import styled from "styled-components";

export const ProgressVessel = styled.div`
	height: 10px;
	margin-bottom: 0px;
	/* background-color: rgb(229, 229, 229); */
background: rgba(158, 183, 206, 0.27);
	border-radius: 18px;
	box-shadow: none;
`

interface ProgressBarProps {
	/**
	* @description complete percent
	* @memberof ProgressBarProps
	*/
	width: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  box-sizing: border-box;
  height: 10px;
  width: ${(p) => p.width}%;
  position: relative;

  /* background: #FF8D3C; */

  background: linear-gradient(to right, #ff47a1 0%, #ff9f4d 100%);
  background: #FFA4A4;
  /* background: linear-gradient( */
  /*   91.07deg, */
  /*   #fb5b69 5.5%, */
  /*   #ff8d3c 91.95%, */
  /*   #ff8d3c 91.95% */
  /* ); */
  border-radius: 18px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;

  & div {
  position: relative;
    background-color: #FFCCCC;
    height: 40%;
    width: 100%;
    border-radius: 4px;
  }
`;

export const MainText = styled.div`
  font-family: "Nunito", lato, apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  color: #21242c;
  line-height: 1.5em;
`;

export const GreyText = styled.div`
  font-family: "Nunito", lato, apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  color: #999999;
  line-height: 1.5em;
`
