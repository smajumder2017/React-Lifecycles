import React from "react";
export default class Mounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.id = React.createRef();
    console.log("Unmounting Component: Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Unmounting Component: getDerivedStateFromProps");
  }

  /**
    4. Component Did mount
    The componentDidMount() method is called after the component is rendered.
    This is where you run statements that requires that the component is already placed in the DOM.
   */
  componentDidMount() {
    console.log("Unmounting Component: Component Did mount");
    this.id.current = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  /**
   5. Component will unmount

   */
  componentWillUnmount() {
    clearInterval(this.id.current);
    console.log("Unmounting Component: Component will unmount");
  }
  /**
   3. render
   The render() method is required, and is the method that actual outputs HTML to the DOM.
   */
  render() {
    console.log("Unmounting Component: Render");
    return (
      <div style={{ padding: "5px" }}>
        <div>Timer (In Sec): {this.state.time}</div>
      </div>
    );
  }
}
