import React, { Component } from "react";

class LifeCycle extends Component {
  /************** 생성 과정의 생명 주기 ************* */
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps 호출");
    return {};
  }
  constructor(props) {
    super(props);
    // getDerivedStateFromProps() 함수를 사용하므로
    // 경고 메세지를 건너 뛰기 위해 state 초기값을 설정
    this.state = {};
    console.log("constructor 호출");
  }
  componentDidMount() {
    console.log("componentDidMount 호출");

    console.log(
      "componentDidMount 변경 주기를 확인하기 위해 이곳에 state 변경"
    );
    this.setState({ update: true });
    // this.forceUpdate();
  }
  /************** 생성 과정의 생명 주기 ************* */

  /************** 변경 과정의 생명 주기 ************* */
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 호출");
    return true;
  }
  /*****render() 함수 호출  */
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate 호출");
    return {};
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 호출");
  }
  /************** 변경 과정의 생명 주기 ************* */

  componentWillUnmount() {
    console.log("componentWillUnmount 호출");
  }
  render() {
    return (
      <div>
        <input defaultValue={this.state.update} />
        {console.log("화면 렌더 render 호출")}
      </div>
    );
  }
}

export default LifeCycle;