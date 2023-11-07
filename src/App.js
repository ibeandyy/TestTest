import logo from "./logo.svg";
import "./App.css";
import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const widgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
};
const widgetConfig2 = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
    variant: "expandable",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LiFiWidget integrator="Fjord V1" config={widgetConfig} />
        <LiFiWidget integrator="Fjord V2" config={widgetConfig2} />
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
