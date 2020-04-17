import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="Counter">
        <div>Counter value: {this.state.value}</div>
        <button className="Button" onClick={this.increaseOnClick}>increase count</button>
        <button className="Button" onClick={this.decreaseOnClick}>decrease count</button>
      </div>
    );
  }

  increaseOnClick = () => {
      const nextVal = this.state.value + 1;
      this.setState({ tmpValue: nextVal });
      if (typeof(this.state.value) !== "number") {
        this.setState({ value: this.state.tmpValue + 1 });
      } else {
        this.setState({ value: nextVal });
        if(nextVal === 0) {
          this.setState({ value: "0" });
        } else if (nextVal % 15 === 0) {
          this.setState({ value: "FizzBuzz" });
        } else if (nextVal % 3 === 0) {
          this.setState({ value: "Fizz" });
        } else if (nextVal % 5 === 0) {
          this.setState({ value: "Buzz" });
        }
      }
  };

  decreaseOnClick = () => {
    const nextVal = this.state.value - 1;
    this.setState({ tmpValue: nextVal });
    if (typeof(this.state.value) !== "number") {
      this.setState({ value: this.state.tmpValue - 1 });
    } else {
      this.setState({ value: nextVal });
      if(nextVal === 0) {
        this.setState({ value: "0" });
      } else if(nextVal % 15 === 0) {
        this.setState({ value: "FizzBuzz" });
      } else if (nextVal % 3 === 0) {
        this.setState({ value: "Fizz" });
      } else if (nextVal % 5 === 0) {
        this.setState({ value: "Buzz" });
      }
    }
  };
}

export default Counter;
