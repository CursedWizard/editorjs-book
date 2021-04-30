/* eslint-disable react/no-direct-mutation-state */
import * as React from "react";
import { Container, ContentContainer } from './NavigationSidePanel.styled';
import SidePanelContent from "./SidePanelContent"
import {AppBar, Badge, IconButton, SwipeableDrawer, Toolbar, Typography} from "@material-ui/core";
import {observer} from "mobx-react";
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SyncIcon from '@material-ui/icons/Sync';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AppleIcon from '@material-ui/icons/Apple';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Box} from "@material-ui/core";
import {courseStorage} from "../../store/courses";

interface Props {
	/**
	* description
	*/
	prop_1?: number;

	/*
	* description
	*/

  scrollPos: number;
}

interface State {
	/**
	* description
	*/
	modalActive: boolean;

	/*
	* description
	*/
	device: "mobile" | "pc";

  open: boolean;

  scrollPos: number;
}

class NavigationSidePanel extends React.Component<Props, State> {
  state: State = {
    modalActive: false,
    device: "mobile",
    open: true,
    scrollPos: this.props.scrollPos
  };

  componentDidMount()
  {
    /* console.log(this.state.lessons) */
  }
  toggleDrawer = (open: boolean | string) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (typeof open === "string")
      this.setState({
        open: !this.state.open
      })
    else
    this.setState({
      open,
    });

  };

  handleLessonTitleClick = (index: number) => {
    /* this.state.lessons[index].extended = !this.state.lessons[index].extended; */
  };

  handleAddButtonClick = () => {
    courseStorage.chooseModalEntity("chapter");
    courseStorage.toggleModal();
  }

  handleModalUnmount = (scrollPos: number) => {
    console.log("yo got yu")
    this.state.scrollPos = scrollPos;
    console.log(this.state.scrollPos)
  }

  handleTestDbClick = () => {
      courseStorage.getStructure();
      // courseStorage.removeAll();
  }

  handleCreateChapter = () => {
      courseStorage.createChapter("Some");
  }

  render() {
    return (
      <Container>
        <SwipeableDrawer
          anchor={"left"}
          variant="persistent"
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <SidePanelContent
            onCancelClick={this.toggleDrawer(false)}
            onLessonTitleClick={this.handleLessonTitleClick}
            onModalUnmount={this.handleModalUnmount}
            scrollPos={this.state.scrollPos}
          />
        </SwipeableDrawer>
        <ContentContainer marginShift={this.state.open ? 360 : 0}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.toggleDrawer("toggle")}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                EditorJs-book
              </Typography>

              <Box flexGrow="1" />
              <Box display="flex">

                {
                  courseStorage.isKatexPreview ? 
                    <IconButton onClick={() => courseStorage.disableKatexPreviw()} aria-label="" color="inherit">
                  <VisibilityOffIcon />
                </IconButton>
                :
                <IconButton onClick={() => courseStorage.enableKatexPreview()} aria-label="" color="inherit">
                  <VisibilityIcon />
                </IconButton>
                }

                <IconButton
                  aria-label=""
                  color="inherit"
                  // onClick={() => courseStorage.updateShit()}
                >
                  <SyncIcon />
                </IconButton>

                <IconButton onClick={this.handleAddButtonClick} aria-label="" color="inherit">
                  <AddIcon />
                </IconButton>

                <IconButton onClick={this.handleTestDbClick} aria-label="" color="inherit">
                  <DeleteIcon />
                </IconButton>

                <IconButton onClick={this.handleCreateChapter} aria-label="" color="inherit">
                  <AppleIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          {this.props.children}
        </ContentContainer>
      </Container>
    );
  }
}

export default observer(NavigationSidePanel);



