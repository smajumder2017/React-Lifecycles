import React from "react";
import "./styles.css";

import Mounting from "./Mounting";
import Updating from "./Updating";
import Unmounting from "./Unmounting";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateButton = React.createRef();
    this.state = {
      mount: false,
      count: 0,
      unmount: false
    };
  }

  doSomething = () => {
    this.updateButton.current.innerText = "WOW!! It did something";
  };

  render() {
    return (
      <div className="App">
        <h1>React Lifecycle Example</h1>
        <div className="container">
          <div className="box">
            <h3>Mounting</h3>
            {this.state.mount ? <Mounting favcol="blue" /> : null}
            <button onClick={() => this.setState({ mount: !this.state.mount })}>
              Click To {this.state.mount ? "Unmount" : "Mount"}
            </button>
          </div>
          <div className="box">
            <h3>Updating</h3>
            <Updating count={this.state.count} doSomething={this.doSomething} />
            <button
              ref={this.updateButton}
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              Click To Update
            </button>
          </div>
          <div className="box">
            <h3>Unmounting</h3>
            {this.state.unmount && <Unmounting />}
            <button
              ref={this.updateButton}
              onClick={() => this.setState({ unmount: !this.state.unmount })}
            >
              Click To {this.state.unmount ? "Unmount" : "Mount"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
