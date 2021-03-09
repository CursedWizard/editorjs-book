
import {Box} from "@material-ui/core";
import * as React from "react";
import CircleNotDone from "src/assets/icons/CircleNotDone";
import { LessonItemContainer, LessonTitle, LessonWrapper, LockWrapper, SubLessonText, SubLessonTitleWrapper, SubLessonWrapper } from './LessonItem.styled';
import {courseStorage} from "src/store/courses"

interface Props {
	/**
	* description
	*/
	done: boolean;

	/*
	* description
	*/
	title: string;
  locked?: boolean;
  selected?: boolean;

  onClick?: (arg0: any | undefined) => void;
}

class SubLessonItem extends React.Component<Props> {

  circleStyle = {
    marginLeft: "-0.33em"
  }

  lockStyle = {
    marginLeft: "-0.43em",
    color: "#FFA4A4"
  }

  handleClick() {
  }

	render() {
		return (
      <SubLessonWrapper selected={this.props.selected ? true : false}>
        <SubLessonTitleWrapper>
          <CircleNotDone style={this.circleStyle} />
          <SubLessonText onClick={this.props.onClick}>
            {this.props.title}
          </SubLessonText>
        </SubLessonTitleWrapper>
      </SubLessonWrapper>
    );
	}
}

export default SubLessonItem;


{/* <CircleNotDone style={this.circleStyle} /> */}
