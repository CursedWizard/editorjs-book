/**
 * NavigationSidePanel styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled from 'styled-components';
import {LessonTitleWrapper, LessonWrapper, SubLessonTitleWrapper, SubLessonWrapper} from "src/components/LessonItem";

export const LessonTable = styled.div`
color: black;
margin-top: 1em;
display: flex;
position: relative;
flex-direction: column;
width: 100%;
align-items: center;
padding-bottom: 6em;
`
export const Container = styled.div`
  /* ### Version for dynamic panel */
  /* display: flex; */
  /* flex-direction: column; */
  /* flex: 0 1 300px; */
  /* padding: 1.5em 1.5em 0px; */
  /* padding-top: 5px; */
  /* position: relative; */
  overflow: hidden;
  height: 100%;
  width: 360px;
  display: flex;
  flex-direction: column;

  * {
    color: ${({theme}) => theme.colors.blue80};
    box-sizing: border-box;
    font-family: Nunito;
  }

  /* ### Version for static panel */
  /* display: flex; */
  /* flex-direction: column; */
  /* flex: 0 1 300px; */
  /* overflow: hidden; */
  /* padding: 24px 24px 0px; */
  /* transition: all 0.5s ease 0s; */
  /* position: fixed; */
  /* width: 300px; */
  /* height: 100%; */
  /* background: rgb(250, 250, 250) none repeat scroll 0% 0%; */
  /* max-width: 100%; */
  & .Icon--24 {
    box-sizing: content-box;

  }
`;


export const SubjectHeader = styled.div`
  font-size: 2em;
  font-weight: 600;
  color: rgb(0, 0, 0);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    color: rgba(255, 138, 55, 0.9);
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }
`;

export const ProgressSection = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProgressVessel = styled.div`
	height: 10px;
	margin-bottom: 0px;
	background-color: rgb(229, 229, 229);
	border-radius: 18px;
	box-shadow: none;
  position: relative;
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
    background-color: #FFE3E3;
    height: 30%;
    width: 100%;
    border-radius: 4px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  align-items: center;
  margin-left: -1.5em;
  justify-content: space-between;
  display: flex;
  text-align: center;
  margin-bottom: 0.5em;
`;


export const ContentTable = styled.div`
	flex: 1 1 auto;
  overflow-y: scroll;
  scrollbar-color: ${({theme}) => theme.colors.blue40} white;
  scrollbar-width: thin;

	display: flex;
  flex-direction: column;
	max-height: 100%;
	/* margin: 30px -24px; */
  /* margin-left: -1.5em; */
  /* margin-right: -1.5em; */
	margin-bottom: 0px;
	
  align-items: center;
  width: 100%;
	list-style: outside none none;
padding-top: 1em;
	padding-bottom: 8px;
  height: 100%;

  ${LessonWrapper} {
    min-height: max-content;
    width: 100%;
    padding-left: 0em;
    padding-right: 0em;
    margin-left: 0em;
    margin-right: 0em;
  }

  & ${LessonTitleWrapper} {
    padding-left: 1.5em;
    padding-right: 1.5em;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  & ${LessonTitleWrapper} h5 {
    color: ${({theme}) => theme.colors.blue100};
  }

  ${SubLessonTitleWrapper} {
    margin-left: 3em;
    margin-right: 3em;
  }

`


