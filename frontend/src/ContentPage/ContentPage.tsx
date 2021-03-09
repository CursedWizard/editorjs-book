
import * as React from "react";
import { Container } from './ContentPage.styled';
import NavigationSidePanel from "src/components/NavigationSidePanel"
import TwinklingSky from "src/components/TwinklingSky";
import EditorJsWrapper from "src/components/EditorJsWrapper";
import {courseStorage} from "src/store/courses";
import {observer} from "mobx-react";
import ModalWindow from "src/components/LessonItem/ModalWindow";
import BottomContentNavigation from "./BottomContentNavigation";

interface State {
	/**
	* description
	*/
	val_1?: number;

	/*
	* description
	*/
	loading: boolean;

  blocked: boolean;
  scrollPos: number;
}

class ContentPage extends React.Component<Record<string, never>, State> {
  state = {
    loading: true,
    lessons: [],
    blocked: false,
    scrollPos: 0
  };

  async componentDidMount() {

    await courseStorage.getCoursesInfo();

    setTimeout(() => {
      this.setState({
        loading: false,
        scrollPos: 0
      });
    }, 0);
  }

  render() {
    return this.state.loading ? (
      <TwinklingSky />
    ) : (
      <>
      <ModalWindow />
      <NavigationSidePanel
        scrollPos={this.state.scrollPos}
      >
        <EditorJsWrapper />
        <BottomContentNavigation/>
      </NavigationSidePanel>
      </>
    );
  }
}

export default observer(ContentPage);

