
import * as React from "react";
import { Container, ProgressSection,
  SubjectHeader, ContentTable, TitleWrapper, LessonTable  } from './SidePanelContent.styled';
import LessonItem from "src/components/LessonItem";
import {Box} from "@material-ui/core";
import {courseStorage} from "src/store/courses";
import {getCourseInfo, CoursesType} from "src/services/utils";
import {observer} from "mobx-react";

interface Props {
	/**
	* description
	*/
	prop_1?: number;

	/**
	* @description test
	* @memberof Props
	*/
	prop_2?: string;

  scrollPos: number;

  onLessonTitleClick:  (index: number) => void;

  onModalUnmount: (yScroll: number) => void;
  onCancelClick: (event: React.SyntheticEvent<Record<string, any>, Event>) => void;
}

interface State {
	/**
	* description
	*/
	progress: number;

	/*
	* description
	*/
	courseUrl: string;
}

class SidePanelContent extends React.Component<Props, State> {
	state: State = {
		courseUrl: "/web/theory-courses/math",
		progress: 18,
	};

  componentDidMount()
  {
    const func = () => {
      const el: any = document.querySelector('#content-table');
      if (el)
        el.scrollTop = this.props.scrollPos;
    }

    setTimeout(func, 10);
  }

	componentWillUnmount()
  {
    console.log("Ok reitring")
    const el: any = document.querySelector('#content-table');
    if (el)
      this.props.onModalUnmount(el.scrollTop)
  }

  handleClick = (lesson: CoursesType["lessons"][0]) => {
    console.log("Clicked")
    lesson.extended = !lesson.extended;
  }

	render() {
		return (
      <Container>
        <ContentTable id="content-table">
          {courseStorage.lessons.lessons.map((lesson, index) => {
            return (
              <LessonItem
                shadows={false}
                key={index}
                title={lesson.title}
                extended={lesson.extended}
                indexNumber={index + 1}
                price={lesson.price}
                subLessons={lesson.subLessons}
                onPurchaseUrl={"/web/theory-courses/math"}
                onClick={() => this.handleClick(lesson)}
              />
            );
          })}
        </ContentTable>

      </Container>
    );
	}
}

export default observer(SidePanelContent);

