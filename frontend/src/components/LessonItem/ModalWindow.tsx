
import {Button, DialogActions, DialogContentText} from "@material-ui/core";
import {DialogContent} from "@material-ui/core";
import {Box} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { LessonItemContainer, LessonTitle, LessonWrapper, LockWrapper, SubLessonText, SubLessonTitleWrapper, SubLessonWrapper } from './LessonItem.styled';
import {courseStorage} from "src/store/courses"
import {observer} from "mobx-react";

interface Props {
}

class ModalWindow extends React.Component<Props> {
  state = {
    textField: ""
  }

  
  handleClickOpen = () => {
    courseStorage.toggleModal(true);
  };

  handleClose = () => {
    courseStorage.toggleModal(false);
  };


  handleTextFieldChange = (e: any) => {
    this.setState({
      textField: e.target.value
    });
  };

  handleConfirmNewName = () => {
    if (courseStorage.currentModalEntity === "lesson")
      courseStorage.createLesson(this.state.textField);
    else
      courseStorage.createChapter(this.state.textField);
  }

	render() {
		return (
      <Dialog open={courseStorage.modalOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new {courseStorage.currentModalEntity}.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write the name for a new {courseStorage.currentModalEntity}. Keep in mind that the name given
            will be the same for the name of the file where all the content will be saved.
          </DialogContentText>
          <TextField
            onChange={this.handleTextFieldChange}
            autoFocus
            margin="dense"
            id="name"
            label={`${courseStorage.currentModalEntity} name`}
            type=""
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
          <Button onClick={this.handleConfirmNewName} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
	}
}

export default observer(ModalWindow);

