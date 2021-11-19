import React, { Component } from "react";

class C11_StateExample extends Component {
  // 생성자
  constructor(props) {
    super(props);
    //state 정의 반드시 초기화 해야한다
    this.state = {
      loading: true,
      formData: "no data",
    };
    // 이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기 하겠습니다.
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data  ";
    // state 변경
    this.setState({
      loading: false,
      formData: data,
    });
    // this.state.loading 현재 true 입니다.
    console.log("loading값 : ", this.state.loading);
    // 이후 호출될 render() 함수에서의 this.state.loading 은 false 입니다.

    // state의 이전값을 확인하기 위해서는 arrow 함수를 이용
    this.setState((prevState) => ({
      loading: false,
      formData: data + ">" + String(Object.entries(prevState)),
    }));
  }

  render() {
    return (
      <div>
        {/**state 데이터는 this.state 로 접근 가느합니다. */}
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default C11_StateExample;