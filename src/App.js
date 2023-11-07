import logo from "./logo.svg";
import "./App.css";
import { LiFiWidget } from "@lifi/widget";

const widgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LiFiWidget integrator="Fjord V1" config={widgetConfig} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
