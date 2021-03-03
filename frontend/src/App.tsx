import React from 'react';
import logo from './logo.svg';
import './App.css';

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

class App extends React.Component<Props> {
  state = {
    loading: true,
  };

  async componentDidMount() {
    let formdata = new FormData();
    formdata.append("page", "1");
    formdata.append("limit", "2");

    let requestOptions: any = {
      method: "GET",
      redirect: "follow"
    };

    const result = await (
      await fetch("http://localhost:3000/getShit", requestOptions)
    ).json();
    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
