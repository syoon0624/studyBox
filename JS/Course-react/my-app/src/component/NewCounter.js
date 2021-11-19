import React, { Component } from "react";

class NewCount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      // 프로퍼티에서 전달된 count 값을 보관
      count,
      newCount:
        count === state.count
          ? // 프로퍼티가 변경되지 않았다면 기존 state 값으로
            state.newCount
          : //프로퍼티가 변경되었다면 변경된 프로퍼티 값으로
            count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <br />
        <button onClick={this.increaseCount}>+</button>
      </div>
    );
  }
}

export default NewCount;