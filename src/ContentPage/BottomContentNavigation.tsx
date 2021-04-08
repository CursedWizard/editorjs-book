
import * as React from "react";
import { Container, BottomNavigationContainer, BottomWrapper } from './ContentPage.styled';
import {observer} from "mobx-react";
import {Box} from "@material-ui/core";
import ReportIcon from '@material-ui/icons/Report';
import Button from "../components/Button/Button";

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

class BottomContentNavigation extends React.Component<Record<string, never>, State> {
  state = {
    loading: true,
    lessons: [],
    blocked: false,
    scrollPos: 0
  };


  render() {
    return (
      <BottomWrapper>
        <BottomNavigationContainer>
          <Button p="12px" variant="neutral">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "12px" }}
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15.0383 6.87698C14.9728 6.86635 14.9066 6.86145 14.8403 6.86231H3.55262L3.79875 6.74783C4.03934 6.63396 4.25821 6.47898 4.44556 6.28991L7.61091 3.12456C8.02779 2.72661 8.09784 2.08642 7.7769 1.60772C7.40338 1.0976 6.68706 0.986845 6.17691 1.36037C6.1357 1.39056 6.09653 1.42348 6.05971 1.45889L0.335755 7.18285C-0.111572 7.62968 -0.111966 8.35451 0.334861 8.80184C0.335147 8.80212 0.335469 8.80244 0.335755 8.80273L6.05971 14.5267C6.5074 14.9731 7.23223 14.9721 7.6787 14.5244C7.71383 14.4892 7.74664 14.4517 7.7769 14.4122C8.09784 13.9335 8.02779 13.2933 7.61091 12.8954L4.45128 9.72429C4.28332 9.55614 4.09021 9.41516 3.87889 9.30644L3.53545 9.15189H14.7773C15.3621 9.17361 15.8752 8.76509 15.9851 8.19027C16.0863 7.56618 15.6624 6.97822 15.0383 6.87698Z"
                  fill="#335D8F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Предыдущий
          </Button>
          <Box flexGrow="1" />
          <Button p="12px" variant="neutral">
            Следующий
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(180deg)", marginLeft: "12px" }}
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M15.0383 6.87698C14.9728 6.86635 14.9066 6.86145 14.8403 6.86231H3.55262L3.79875 6.74783C4.03934 6.63396 4.25821 6.47898 4.44556 6.28991L7.61091 3.12456C8.02779 2.72661 8.09784 2.08642 7.7769 1.60772C7.40338 1.0976 6.68706 0.986845 6.17691 1.36037C6.1357 1.39056 6.09653 1.42348 6.05971 1.45889L0.335755 7.18285C-0.111572 7.62968 -0.111966 8.35451 0.334861 8.80184C0.335147 8.80212 0.335469 8.80244 0.335755 8.80273L6.05971 14.5267C6.5074 14.9731 7.23223 14.9721 7.6787 14.5244C7.71383 14.4892 7.74664 14.4517 7.7769 14.4122C8.09784 13.9335 8.02779 13.2933 7.61091 12.8954L4.45128 9.72429C4.28332 9.55614 4.09021 9.41516 3.87889 9.30644L3.53545 9.15189H14.7773C15.3621 9.17361 15.8752 8.76509 15.9851 8.19027C16.0863 7.56618 15.6624 6.97822 15.0383 6.87698Z"
                  fill="#335D8F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </BottomNavigationContainer>
        <div className="delimeter" />
        <BottomNavigationContainer>
        <Box flexGrow="1" />
          <Box display="flex" flexDirection="row" alignItems="center">
        <ReportIcon color="inherit"/>
            <Box ml="8px">
        Сообщить о проблеме
            </Box>
          </Box>
        </BottomNavigationContainer>
      </BottomWrapper>
    );
  }
}

export default observer(BottomContentNavigation);

