import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  fetchWeather() {
    console.log("loading");
    console.log(this);
  }
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="search for location ..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    );
  }
}

export default App;
