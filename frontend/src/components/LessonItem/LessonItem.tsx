
import {Box} from "@material-ui/core";
import * as React from "react";
import { LessonWrapperProps, LessonItemContainer, LessonTitle, LessonWrapper, SubLessonList, LessonTitleWrapper } from './LessonItem.styled';
import SubLessonItem from "./SubLessonItem";
import {Button} from "src/components/Button"
import {observer} from "mobx-react";
import ModalWindow from "./ModalWindow";
import {courseStorage} from "src/store/courses"

interface Props {
  /**
   * description
   */

  indexNumber: number;
  /*
   * description
   */
  title: string;

  extended: boolean;

  price: number;

  subLessons: {
    title: string;
    link: string;
    done: boolean;
    locked?: boolean;
  }[];

  onPurchaseUrl: string;


  onClick?: (arg0: any | undefined) => void;
}

class LessonItem extends React.Component<Props & LessonWrapperProps> {

  buttonStyle: React.CSSProperties = {
    width: "5em"
  }

  handleButtonClick = () => {
    courseStorage.takeChapterName(this.props.title)
    courseStorage.chooseModalEntity("lesson");
    courseStorage.toggleModal();
  }

  handleLessonClick = (lessonTitle: string) => {
    courseStorage.selectLesson(this.props.title, lessonTitle);
  }

	render() {
	  const {indexNumber} = this.props;
		return (
      <>
        <LessonWrapper shadows={this.props.shadows}>
          <LessonTitleWrapper>
            <LessonTitle onClick={this.props.onClick}>
              {
                indexNumber ?
              <h5>{`${this.props.indexNumber}`}.</h5>
              :
                null
              }
              <h5>{this.props.title}</h5>
            </LessonTitle>
            <Button 
                style={{
                  transform: this.props.extended ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "all 0.2s ease-in-out"
                }}
              onClick={this.handleButtonClick} borderRadius="999px" pb="1px" width="1.4em" height="1.4em" variant="neutral">

              <div 
              >+</div>
            </Button>
          </LessonTitleWrapper>

          {this.props.extended ? (
            <SubLessonList>
              {this.props.subLessons.map((lesson, index) => {
                return (
                    <SubLessonItem
                      onClick={() => this.handleLessonClick(lesson.title)}
                      selected={courseStorage.isSelected(this.props.title, lesson.title)}
                      locked={lesson.locked}
                      done={lesson.done}
                      title={lesson.title}
                      key={index}
                    />
                );
              })}
            </SubLessonList>
          ) : null}
        </LessonWrapper>
      </>
    );
	}
}

export default observer(LessonItem);

