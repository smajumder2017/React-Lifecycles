import React from "react";
export default class Updating extends React.Component {
  constructor(props) {
    super(props);
    console.log("Updating Component: Constructor");
    this.state = {};
  }
  /**
     1. getDerivedStateFromProps
    Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.
    This is still the natural place to set the state object based on the initial props.
   */
  static getDerivedStateFromProps(props, state) {
    console.log("Updating Component: getDerivedStateFromProps");
    return {};
  }

  /**
   2. Should Component Update
    In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
    The default value is true.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Updating Component: Should Component Update");
    // this condition will prevent the component from unnessesary updates or We can use React.PureComponent instead of React.Component as Pure Component Autometically inpects prop changes and hand handle the work of componentShouldUpdate.
    if (nextProps.count === 0) {
      return false;
    }
    return nextProps.count >= 11 ? false : true;
  }

  /**
    4. Get Snapshot Before Update
    In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
    If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Updating Component: Get Snapshot Before Update");
    return {};
  }

  /**
    5. Component Did Update
    The componentDidUpdate method is called after the component is updated in the DOM.
    componentDidUpdate() can be used to trigger some sideeffects on change of props or state.
    It is important to note that updating the component's internal state will trigger a new update with new render and the componentDidUpdate will be called again. We need to be careful with the setState function in the componentDidUpdate as it may cause an infinite update loop. In our case, we check the name of a client in props to avoid that.
   */

  componentDidUpdate() {
    console.log(
      "Updating Component: Component Did Update:: updated count -> " +
        this.props.count
    );
    if (this.props.count === 10) {
      this.props.doSomething();
    }
  }

  /**
    3. Render
    The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
   */
  render() {
    console.log("Updating Component: Render");
    return (
      <div>
        <div style={{ padding: "5px" }}>
          <h4>Component will not update after count 10</h4>
          <h5>If Count is 10 it will do something !!</h5>
          <div>{this.props.count}</div>
        </div>
      </div>
    );
  }
}
