import React from "react";
export default class Mounting extends React.Component {
  /**
     1. Constructor
    The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
    The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
   */
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red", previousColor: "" };
    console.log("Mounting Component: Constructor");
  }
  /**
     2. getDerivedStateFromProps
    The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
    This is the natural place to set the state object based on the initial props.
    It takes state as an argument, and returns an object with changes to the state.
    The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:
   */
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting Component: getDerivedStateFromProps");
    return { favoritecolor: props.favcol, previousColor: state.favoritecolor };
  }

  /**
    4. Component Did mount
    The componentDidMount() method is called after the component is rendered.
    This is where you run statements that requires that the component is already placed in the DOM.
   */
  componentDidMount() {
    console.log("Mounting Component: Component Did mount");
    setTimeout(() => {
      // this.setState({
      //   favoritecolor: "yellow",
      //   previousColor: this.state.favoritecolor
      // });
      console.log("Mounting Component: Effect");
    }, 3000);
  }

  /**
   3. render
   The render() method is required, and is the method that actual outputs HTML to the DOM.
   */
  render() {
    console.log("Mounting Component: Render");
    return (
      <div style={{ padding: "5px" }}>
        <h3>Mounting</h3>
        <div>Prevoius Color: {this.state.previousColor}</div>
        <div>Current Color: {this.state.favoritecolor}</div>
      </div>
    );
  }
}
