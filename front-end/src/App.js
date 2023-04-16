import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/empresa")
      .then((res) => res.json())
      .then((data) => setData(data.Job_Description));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
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

export default App;
