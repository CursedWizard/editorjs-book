/**
 * LessonItem styled container
 *
 * @author: exode <info@exode.ru>
 */

import styled from 'styled-components';

export const LessonItemContainer = styled.div`
  
`;

export type LessonWrapperProps = {
  shadows: boolean;
}

export const LessonWrapper = styled.div<LessonWrapperProps>`
	/* display: flex; */
  /* flex-direction: column; */
	/* align-items: center; */
  background: #FEFFFF;
  box-shadow: ${p => p.shadows ? "inset 2px 2px 4px rgba(175, 198, 255, 0.25)" : "none"};
  border-radius: 20px;
  padding: 0.5em;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 1.25em;
  padding-right: 1.25em;
  width: 100%;

  margin-left: 1.25em;
  margin-right: 1.25em;

`

export const LessonTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 1.5em; */
  /* padding-right: 1.5em; */
  width: 100%;
  margin-bottom: 1em;
`

export const LessonTitle = styled.div`
flex: 80%;
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
/* font-size: 1.2em; */
margin-right: 0.5em;
font-weight: 600;
cursor: pointer;
height: max-content;

& h5:nth-child(1) {
  align-self: start;
}
& h5:nth-child(2) {
  margin-left: 0.4em;
}
`

export const SubLessonList = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 0 auto;
  align-self: start;
  /* padding-bottom: 1em; */
  width: 100%;
  margin-top: 0.7em;
`

type SubLessonWrapperTypes = {
  selected: boolean;
}

export const SubLessonTitleWrapper = styled.div`
  margin-left: 1.5em;
  margin-right: 1.5em;
  display: flex;
  flex-wrap: nowrap;
  -moz-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid #ffe3e3;
  padding-top: 0em;
  padding-bottom: 1em;

  &:first-child {
    /* padding-top: 0em; */
  }

  &:last-child {
    /* border-color: transparent; */
    /* padding-bottom: 0px; */
  }
`;
export const SubLessonWrapper = styled.div<SubLessonWrapperTypes>`
  overflow: visible;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.bg : "transparent"};
  width: 100%;
  position: relative;
  transform: translateY(${({selected}) => selected ? "-0.5em" : "0px"});
  z-index: ${({selected}) => selected ? "0" : "2"};

  ${SubLessonTitleWrapper} {
    position: relative;
    top: ${({selected}) => selected ? "0.5em" : "0px"};
    /* z-index: ${({selected}) => selected ? "0" : "1"}; */
  }
  &:last-child {
    ${SubLessonTitleWrapper} {
      border-color: transparent;
      padding-top: 0em;
      position: relative;
    }
  }

  &:nth-last-child(2) {
    ${SubLessonTitleWrapper} {
      padding-bottom: 1em;
    }
    z-index: 1;
  }

  &:first-child {
    ${SubLessonTitleWrapper} {
      padding-top: 0em;
      /* padding-bottom: 1em; */
      position: relative;
    }
  }
`;


export const SubLessonText = styled.div`
	font-weight: 400;
	flex: 0 1 auto;
	margin-left: 20px;
	margin-top: 0.2em;
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.2s ease 0s;
`

export const LockWrapper = styled.div`
  && * {
    color: ${({theme}) => theme.colors.sundown100};
  }
  margin-left: -0.53em;
  background-color: white;
`
