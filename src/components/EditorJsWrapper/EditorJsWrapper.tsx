
import * as React from "react";
import { EditorJsWrapperContainer } from './EditorJsWrapper.styled';
import EditorJs from "react-editor-js";
import {observer} from "mobx-react";

import { EDITOR_JS_TOOLS, data } from "./constants";

import "katex/dist/katex.css";
import {courseStorage} from "../../store/courses";

export const lol_data = {
  /* time: 1556098174501, */
  blocks: [
    {
      type: "header",
      data: {
        text: "Introduction",
        level: 2
      }
    },
  ],
  version: "2.12.4"
}
interface Props {
	/**
	* description
	*/
	prop_1?: number;

	/*
	* description
	*/
	prop_2?: string;

  onClick?: (arg0: any | undefined) => void;
}

class EditorJsWrapper extends React.Component<Props> {

  handleChange = (api: any, newData?: any) => {
    if (!courseStorage.updateContent)
      return;
    // courseStorage.updateLessonContent(newData);
  }

	render() {
		return (
			<EditorJsWrapperContainer>
        <EditorJs 
          enableReInitialize={true}
          tools={EDITOR_JS_TOOLS as any}
          data={courseStorage.lessonContent as any}
          readOnly={courseStorage.readOnly}
          onChange={this.handleChange}
        />
			</EditorJsWrapperContainer>
		);
	}
}

export default observer(EditorJsWrapper);

