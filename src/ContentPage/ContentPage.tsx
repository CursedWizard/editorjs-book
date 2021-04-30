
import * as React from "react";
import {observer} from "mobx-react";
import BottomContentNavigation from "./BottomContentNavigation";
import {courseStorage} from "../store/courses";
import TwinklingSky from "../components/TwinklingSky";
import ModalWindow from "../components/LessonItem/ModalWindow";
import NavigationSidePanel from "../components/NavigationSidePanel";
import EditorJsWrapper from "../components/EditorJsWrapper";
import fs from 'fs';

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

