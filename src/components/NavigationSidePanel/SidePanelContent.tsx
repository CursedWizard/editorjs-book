
import * as React from "react";
import { Container, ProgressSection,
  SubjectHeader, ContentTable, TitleWrapper, LessonTable  } from './SidePanelContent.styled';
import {Box} from "@material-ui/core";
import {observer} from "mobx-react";
import {CoursesType} from "../../services/utils";
import {courseStorage} from "../../store/courses";
import Chapter from "../LessonItem";

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
    courseStorage.updateChapter(lesson);
  }

	render() {
		return (
      <Container>
        <ContentTable id="content-table">
          {courseStorage.lessons ?
            courseStorage.lessons.map((chapter, index) => {
            return (
              <Chapter
                shadows={false}
                key={index}
                title={chapter.title}
                extended={chapter.extended}
                indexNumber={chapter.index}
                price={chapter.price}
                subLessons={chapter.subLessons}
                onPurchaseUrl={"/web/theory-courses/math"}
                onClick={() => this.handleClick(chapter)}
              />
            );
          })
          : null}
        </ContentTable>

      </Container>
    );
	}
}

export default observer(SidePanelContent);

